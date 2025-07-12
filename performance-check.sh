#!/bin/bash

# Performance monitoring script for WAVELOOP web app

echo "🚀 WAVELOOP Performance Analysis"
echo "================================"

# Check file sizes
echo "📁 Asset Sizes:"
echo "---------------"
echo "Videos:"
ls -lh public/*.mp4 2>/dev/null | awk '{print $5, $9}' || echo "No videos found"

echo -e "\nLarge Images (>100KB):"
find public -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | xargs ls -lh | awk '$5 ~ /[0-9]+[0-9]+K|[0-9]+M/ {print $5, $9}'

echo -e "\nTotal public directory size:"
du -sh public/

# Check for duplicate dependencies
echo -e "\n📦 Dependency Analysis:"
echo "----------------------"
echo "Motion packages:"
grep -E "motion|framer" package.json || echo "No motion packages found"

echo -e "\nBundle size estimation (after build):"
if [ -d ".next" ]; then
    echo "JavaScript bundles:"
    find .next/static/chunks -name "*.js" -exec ls -lh {} \; | head -5
else
    echo "Run 'bun run build' first to see bundle sizes"
fi

echo -e "\n✅ Performance Tips Applied:"
echo "- Font loading optimized with display: swap"
echo "- Video preload changed to metadata"
echo "- Image lazy loading enabled"
echo "- Duplicate motion package removed"
echo "- CSS import optimized"
echo "- Bundle analyzer added"
echo -e "\n💡 Next Steps:"
echo "- Compress videos (aim for <2MB each)"
echo "- Convert large images to WebP format"
echo "- Run 'bun run analyze' to see bundle composition"
echo "- Consider implementing dynamic imports for large components"
