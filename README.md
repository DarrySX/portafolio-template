# 🚀 Modern Portfolio Template

A beautiful, responsive, and modern portfolio template built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Perfect for developers, designers, and creative professionals who want to showcase their work with style.

![Portfolio Template Preview](https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Portfolio+Template+Preview)

## ✨ Features

- **⚡ Next.js 15** - Latest version with App Router
- **🎨 Modern Design** - Clean, professional, and responsive
- **🌙 Dark/Light Mode** - Seamless theme switching
- **📱 Fully Responsive** - Looks great on all devices
- **⚡ Fast Performance** - Optimized for speed and SEO
- **🎭 Smooth Animations** - Powered by Framer Motion
- **🎯 TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first styling
- **📧 Contact Form** - Ready-to-use contact functionality
- **📝 Blog Ready** - Built-in blog structure
- **🔧 Easy Customization** - Well-structured and documented code

## 🎯 Demo

🔗 **[Live Demo](https://your-demo-link.vercel.app)**

## 📸 Screenshots

### Desktop
![Desktop View](https://via.placeholder.com/800x500/1a1a1a/ffffff?text=Desktop+View)

### Mobile
![Mobile View](https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Mobile+View)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- pnpm, npm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🛠️ Customization

### 🎨 Colors and Themes

The template uses CSS variables for easy theming. Edit `app/globals.css` to customize colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 9% 89%;
  /* ... more variables */
}
```

### 📝 Content

1. **Personal Information**: Edit `components/hero.tsx`
2. **About Section**: Modify `components/about.tsx`
3. **Projects**: Update `components/projects.tsx`
4. **Skills**: Customize `components/skills.tsx`
5. **Experience**: Edit `components/experience.tsx`

### 🖼️ Images

Replace the placeholder images in the `public/` directory with your own:
- `professional-developer-portrait.jpg` - Your profile picture
- Project screenshots in the public folder

### 📧 Contact Form

The contact form is ready to use. You can:
- Connect it to a backend service
- Use services like Formspree, Netlify Forms, or Vercel Forms
- Edit `app/api/contact/route.ts` for custom handling

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects section
│   ├── skills.tsx        # Skills section
│   ├── experience.tsx    # Experience section
│   └── contact.tsx       # Contact section
├── lib/                  # Utility functions
├── public/              # Static assets
└── hooks/               # Custom React hooks
```

## 🎨 Design System

This template uses a carefully crafted design system:

- **Typography**: Geist font family for clean readability
- **Colors**: Carefully selected palette with dark/light variants
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components built with shadcn/ui
- **Animations**: Smooth micro-interactions

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ⚡ Performance

- **Lighthouse Score**: 100/100
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **SEO Ready**: Meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `pnpm build`
2. Deploy the `out` folder to Netlify

### Traditional Hosting

1. Run `pnpm build`
2. Upload the generated files to your hosting provider

## 🔧 Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💖 Support

If you find this template helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-template](https://github.com/yourusername/portfolio-template)

---

<div align="center">
  <strong>Built with ❤️ for the developer community</strong>
</div>
