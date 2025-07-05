import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { StaticImageData } from 'next/image'

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string | StaticImageData;
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
  slug: string;
}

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export function getAllBlogSlugs() {
  try {
    const fileNames = fs.readdirSync(blogsDirectory)
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading blogs directory:', error)
    return []
  }
}

export function getBlogBySlug(slug: string): Blog | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      content,
      author: data.author,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      image: data.image,
      tags: data.tags || [],
      views: data.views || 0,
      likes: data.likes || 0,
      featured: data.featured || false,
      slug,
    }
  } catch (error) {
    console.error(`Error reading blog ${slug}:`, error)
    return null
  }
}

export function getAllBlogs(): Blog[] {
  const slugs = getAllBlogSlugs()
  const blogs = slugs
    .map(slug => getBlogBySlug(slug))
    .filter((blog): blog is Blog => blog !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return blogs
}

export function getBlogsByCategory(category: string): Blog[] {
  const blogs = getAllBlogs()
  
  if (category === 'All') {
    return blogs
  }
  
  return blogs.filter(blog => blog.category === category)
}

export const categories = ['All', 'Technology', 'Design', 'Backend', 'AI/ML', 'Cloud', 'Mobile', 'Security', 'Performance']