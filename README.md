# Kerala Mural Paintings Website

A Next.js static website showcasing Kerala mural paintings with multiple pages including About Us, Gallery, Full Gallery, and Contact Us.

## Features

- **Home Page**: Hero section with introduction to Kerala mural art
- **About Us**: Detailed information about the history, techniques, and cultural significance
- **Gallery**: Thumbnail grid view of all paintings
- **Full Gallery**: Detailed view with lightbox functionality for viewing individual paintings
- **Contact Us**: Contact information display

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
Arts/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About Us page
│   ├── gallery/           # Gallery page
│   ├── full-gallery/      # Full Gallery page
│   └── contact/           # Contact Us page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── GalleryGrid.tsx    # Gallery grid component
│   └── Footer.tsx         # Footer component
├── data/                  # Data files
│   └── gallery.ts         # Gallery items data
├── public/                # Static assets
│   └── images/           # Image files
└── styles/                # Global styles
```

## Adding Images

To add your own images:

1. Place images in `public/images/gallery/`
2. Follow the naming convention: `mural-1.jpg`, `mural-2.jpg`, etc.
3. Update the image paths in `data/gallery.ts` if needed

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static Site Generation

## License

This project is open source and available for use.

