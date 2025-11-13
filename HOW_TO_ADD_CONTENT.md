# How to Add Content to Your Portfolio

## 📝 Adding Blog Posts

### 1. Create a new folder
In `src/content/blog/`, create a folder with your post name (use kebab-case):
```
src/content/blog/your-post-title/
```

### 2. Create the post file
Inside that folder, create `index.mdx`:

```markdown
---
title: 'Your Amazing Post Title'
description: 'A brief description under 155 characters that will show in previews'
date: 2024-11-12
tags: ['robotics', 'ai', 'python']
authors: ['jonathan-muhire']
draft: false
---

import Callout from '@/components/Callout.astro'

Your content starts here...

## Section Title

Write your content using Markdown.

<Callout type="info">
You can use callouts for important information. Types: info, warning, danger, success
</Callout>
```

### 3. Adding images to posts
Place images in the same folder as your post:
```
src/content/blog/your-post-title/
├── index.mdx
├── diagram.png
└── screenshot.jpg
```

Reference them in your post:
```markdown
![Description](./diagram.png)
```

### 4. Code blocks with syntax highlighting
\`\`\`python
def process_robot_data(sensor_data):
    """Process incoming sensor data from robot."""
    return sensor_data * 2
\`\`\`

## 🚀 Adding Projects

### 1. Create a project file
In `src/content/projects/`, create a `.md` file:

```markdown
---
name: 'Project Name'
description: 'What the project does and its impact (keep it concise)'
tags: ['Python', 'ROS', 'Docker', 'AI']
image: '/static/1200x630.png'  # Use default or add your own
link: 'https://github.com/your-username/project'
startDate: '2024-01-01'
endDate: '2024-06-01'  # Optional, omit if ongoing
---
```

### 2. Adding project images/videos
For now, use the default image. To add custom images later:
1. Add a 1200x630px image to `public/static/`
2. Reference it in the project frontmatter

## 🎥 Adding Videos (Future Enhancement)

Currently, videos need custom implementation. For now:
- Host videos on YouTube/Vimeo and link to them
- Or create a blog post about the project with embedded videos

## 📸 Image Guidelines

- **Blog post images**: Any size, place in the post folder
- **Project images**: Should be 1200x630px for consistency
- **Profile image**: Already set up at `/media/profile.png`

## 🏷️ Tags Best Practices

Use consistent, lowercase tags:
- Languages: `python`, `javascript`, `rust`
- Frameworks: `ros`, `pytorch`, `tensorflow`
- Topics: `robotics`, `ai`, `infrastructure`, `data-engineering`

## 📅 Dating Content

Use ISO format: `YYYY-MM-DD`
- Example: `2024-11-12`

## ✅ Publishing Checklist

Before publishing:
1. Set `draft: false` in frontmatter
2. Check all links work
3. Ensure images load properly
4. Run `npm run build` locally to test
5. Commit and push to GitHub

## 🔧 Common Issues

### Images not showing
- Check the path is correct (use `./` for same folder)
- Ensure the image is in the right location
- For project images, use absolute paths starting with `/`

### Build errors
- Check frontmatter syntax (proper YAML format)
- Ensure all required fields are present
- Look for unclosed MDX components

### Deployment issues
- Make sure GitHub Actions is enabled
- Check the deployment logs in GitHub
- Ensure the repository settings have Pages enabled

## 💡 Tips

1. **Write drafts**: Set `draft: true` while working on posts
2. **Use components**: Import and use Astro components for rich content
3. **Preview locally**: Always run `npm run dev` to preview changes
4. **Keep it organized**: One folder per blog post with all its assets
5. **Consistent style**: Follow the existing content style for consistency

Happy content creating! 🎉