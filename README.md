# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, experience, projects, and provides a way for visitors to get in touch.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📝 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Scroll
- Hero Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-next.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-next
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-next/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── projects/
├── styles/
└── package.json
```

## Customization

1. Update the content in each component with your personal information
2. Add your project images to the `public/projects` directory
3. Update social media links in the Contact and Footer components
4. Modify the color scheme in `tailwind.config.js` if desired

## Deployment

The easiest way to deploy your portfolio is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 