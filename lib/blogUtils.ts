import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  content: string;
  fileName: string;
  dateCreated: Date;
  excerpt: string;
  author: string;
  authorDesignation: string;
  authorDetails: string;
  authorImage: string;
  category: string;
  image: string;
}

interface FrontMatter {
  title?: string;
  metaDescription?: string;
  dateCreated?: string;
  author?: string;
  authorDesignation?: string;
  authorDetails?: string;
  authorImage?: string;
  category?: string;
  image?: string;
}

function parseFrontMatter(content: string): { frontMatter: FrontMatter; content: string } {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return { frontMatter: {}, content };
  }

  const frontMatterText = match[1];
  const contentWithoutFrontMatter = content.replace(frontMatterRegex, '');
  
  const frontMatter: FrontMatter = {};
  
  // Parse YAML-like frontmatter
  const lines = frontMatterText.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      if (key && value) {
        frontMatter[key as keyof FrontMatter] = value;
      }
    }
  }
  
  return { frontMatter, content: contentWithoutFrontMatter };
}

function generateSlug(filename: string): string {
  return filename
    .replace('.md', '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDirectory = path.join(process.cwd(), 'app/(root)/sampleBlog/content');
  
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));
    
    const posts = await Promise.all(
      markdownFiles.map(async (fileName) => {
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const stats = fs.statSync(fullPath);
        
        // Parse frontmatter
        const { frontMatter, content } = parseFrontMatter(fileContents);
        
        // Extract title from frontmatter or from the first heading in the markdown
        let title = frontMatter.title;
        if (!title) {
          const titleMatch = content.match(/^#\s+(.+)$/m);
          title = titleMatch ? titleMatch[1].replace(/\*\*/g, '').trim() : fileName.replace('.md', '');
        }
        
        // Extract meta description from frontmatter or content
        let metaDescription = frontMatter.metaDescription;
        if (!metaDescription) {
          const metaMatch = content.match(/\*\*Meta Description:\*\*\s+(.+)/);
          metaDescription = metaMatch ? metaMatch[1].trim() : 'Blog post description';
        }
        
        // Extract excerpt (first paragraph after the title)
        const contentAfterTitle = content.split('---')[2] || content;
        const paragraphs = contentAfterTitle.split('\n\n').filter(p => p.trim() && !p.startsWith('#'));
        const excerpt = paragraphs[0] ? paragraphs[0].replace(/\*\*/g, '').substring(0, 200) + '...' : metaDescription;
        
        // Extract author info from frontmatter or content
        let author = frontMatter.author || 'Waveloop Team';
        let authorDesignation = frontMatter.authorDesignation || 'Developer';
        
        if (!frontMatter.author || !frontMatter.authorDesignation) {
          const authorBioMatch = content.match(/\*\*Author Bio:\*\*\s*[\r\n]+(.+?)(?=\n\n|\n$|$)/);
          if (authorBioMatch) {
            const authorBioText = authorBioMatch[1].trim();
            // Extract author name (text before the first "—" or "-")
            const nameMatch = authorBioText.match(/^(.+?)(?:\s*[—-]\s*)/);
            if (nameMatch && !frontMatter.author) {
              author = nameMatch[1].trim();
              // Extract designation/description (text after "—" or "-" and before any links)
              const descMatch = authorBioText.match(/[—-]\s*(.+?)(?=\.\s*Follow|\.\s*Connect|\.\s*Find|$)/);
              if (descMatch && !frontMatter.authorDesignation) {
                authorDesignation = descMatch[1].trim();
              }
            } else if (!frontMatter.author) {
              // Fallback: use the first sentence as author name
              const firstSentence = authorBioText.split('.')[0];
              if (firstSentence) {
                author = firstSentence.trim();
              }
            }
          }
        }
        
        // Extract category from frontmatter or content
        let category = frontMatter.category;
        if (!category) {
          const categoryMatch = content.match(/\*\*Category:\*\*\s+(.+)/);
          category = categoryMatch ? categoryMatch[1].trim() : 'Technology';
        }
        
        // Use frontmatter date if available, otherwise use file creation date
        let dateCreated = stats.birthtime;
        if (frontMatter.dateCreated) {
          const parsedDate = new Date(frontMatter.dateCreated);
          if (!isNaN(parsedDate.getTime())) {
            dateCreated = parsedDate;
          }
        }
        
        return {
          id: fileName.replace('.md', ''),
          slug: generateSlug(fileName),
          title,
          metaDescription,
          content: fileContents,
          fileName,
          dateCreated,
          excerpt,
          author,
          authorDesignation,
          authorDetails: frontMatter.authorDetails || 'Hello I am from team WAVELOOP',
          authorImage: frontMatter.authorImage || '/kota.jpg',
          category,
          image: frontMatter.image || '/blog.jpg'
        };
      })
    );
    
    // Sort by creation date (newest first)
    return posts.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}
