# Jonathan Muhire - Portfolio

A modern portfolio website built with Astro, featuring a clean design and full-page scrolling sections.

## 🚀 Live Site

🌐 **Live Site:** [jonathanmuhire.com](https://jonathanmuhire.com)

## ✨ Features

- **Full-page scrolling design** with smooth transitions
- **Light/dark theme** with light as default
- **Responsive design** optimized for all devices
- **Project showcase** with demo links and descriptions
- **Blog section** powered by MDX
- **GitHub Pages deployment** with automated builds

## 🛠️ Technology Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Content:** [MDX](https://mdxjs.com/) for blog posts
- **Deployment:** GitHub Pages with GitHub Actions

## 🎨 Design

The portfolio features:
- Clean, minimal aesthetic with full-page sections
- Smooth scroll navigation between sections
- Profile picture in header with Penrose triangle favicon
- Projects section with consistent 2025 dating
- About and writing sections with clean layouts

## 🧩 Sections

1. **Intro** - Personal introduction with scroll indicator
2. **Navigation** - Projects, About, Writing boxes with profile links
3. **Projects** - Detailed project listings with demos and code links
4. **About** - Link to detailed about page
5. **Writing** - Recent blog posts and articles

## 🚦 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Jonathan-321/jonathanmuhire.git
   cd jonathanmuhire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview built site |
| `npm run astro` | Run Astro CLI commands |

## 🌐 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The workflow:

1. Triggers on pushes to the `main` branch
2. Builds the Astro site using `npm run build`
3. Deploys the built files to GitHub Pages

## 📁 Project Structure

```
├── public/          # Static assets (favicon, media files)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── content/     # Blog posts and authors
│   ├── layouts/     # Page layouts
│   ├── pages/       # Site pages
│   └── styles/      # Global styles
├── .github/
│   └── workflows/   # GitHub Actions deployment
└── astro.config.ts  # Astro configuration
```

## 🎯 About

Previously co-founded Neotix, now building infrastructure for embodied AI through robotics data and continuous learning. This portfolio showcases projects in:

- Robotics teleoperation and manipulation
- Data infrastructure and versioning
- Computer vision and sensor fusion
- Autonomous systems and learning

Built with modern web technologies while maintaining clean aesthetics and performance.
