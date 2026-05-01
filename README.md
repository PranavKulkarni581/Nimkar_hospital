# Nimkar Hospital - Modern Healthcare Website

A professional, modern, and fully responsive static website for Nimkar Hospital built with React.js and Tailwind CSS.

## 🎨 Design Theme

The website features a clean medical theme with a light orange and white color palette:

- **Primary Orange**: `#F97316` (buttons, highlights, CTAs)
- **Secondary Light Orange**: `#FDBA74` (backgrounds, hover effects)
- **Background Colors**: 
  - White: `#FFFFFF`
  - Soft Orange: `#FFF7ED`
- **Text Colors**:
  - Dark: `#1F2937`
  - Secondary: `#6B7280`
- **Borders**: `#FED7AA`
- **Hover Effects**: `#EA580C`

## ✨ Features

### Core Functionality
- ✅ Fully responsive design (mobile-first approach)
- ✅ Smooth scrolling navigation
- ✅ Sticky header with scroll effect
- ✅ Mobile hamburger menu
- ✅ Image lightbox gallery
- ✅ Doctor profile modals
- ✅ Contact form with validation
- ✅ Floating WhatsApp button
- ✅ Interactive UI elements
- ✅ Custom scrollbar styling

### Sections

1. **Header**
   - Sticky navigation bar
   - Responsive mobile menu
   - Smooth scroll links
   - Emergency contact button

2. **Hero Section**
   - Gradient background
   - Call-to-action buttons
   - Statistics display
   - Professional imagery

3. **Highlights**
   - 4 Key specialties (Gastroenterology, Endoscopy, X-ray & Sonography, Operation Theater)
   - Icon-based cards
   - Stats section

4. **About Section**
   - Split layout design
   - Feature highlights
   - Team information
   - Mission statement

5. **Doctors Section**
   - Doctor profile cards
   - Modal popups with detailed information
   - Qualifications and achievements
   - Professional imagery

6. **Services Section**
   - 12+ Medical services
   - Icon-based grid layout
   - Hover effects
   - Call-to-action section

7. **Facilities Section**
   - 8 Hospital facilities
   - Image-based cards
   - Feature highlights
   - Statistics display

8. **Gallery Section**
   - Image grid layout
   - Lightbox modal viewer
   - Next/Previous navigation
   - Smooth hover effects

9. **Contact Section**
   - Contact form with validation
   - Google Maps integration
   - Contact information
   - Floating WhatsApp button

10. **Footer**
    - Quick links
    - Services list
    - Contact information
    - Social media links

## 🛠️ Technology Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.x** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Unsplash** - Professional images

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Highlights.tsx  # Key specialties
│   │   ├── About.tsx       # About hospital
│   │   ├── Doctor.tsx      # Doctor profiles
│   │   ├── Services.tsx    # Medical services
│   │   ├── Facilities.tsx  # Hospital facilities
│   │   ├── Gallery.tsx     # Image gallery
│   │   ├── Contact.tsx     # Contact form & info
│   │   └── Footer.tsx      # Footer section
│   └── App.tsx             # Main app component
├── styles/
│   ├── index.css           # Global styles
│   ├── theme.css           # Theme variables
│   ├── tailwind.css        # Tailwind imports
│   └── fonts.css           # Font imports
└── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎯 Key Components

### Header Component
- Sticky navigation with scroll detection
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Emergency contact button

### Hero Section
- Eye-catching gradient background
- Primary and secondary CTA buttons
- Hospital statistics
- Professional imagery

### Doctor Component
- Grid layout of doctor profiles
- Modal popups for detailed information
- Qualifications and achievements display
- Professional portraits

### Gallery Component
- Responsive image grid
- Lightbox modal with navigation
- Image categories
- Zoom hover effects

### Contact Component
- Functional contact form
- Google Maps integration
- Contact details display
- Floating WhatsApp button

## 🎨 Customization

### Colors
All colors are defined using Tailwind classes. To change the color scheme, update the color values in the components:
- Primary: `#F97316`
- Hover: `#EA580C`
- Background: `#FFF7ED`
- Border: `#FED7AA`

### Images
Images are sourced from Unsplash. To use your own images:
1. Replace the image URLs in each component
2. Place custom images in the `/public/images` directory
3. Update image paths accordingly

### Content
All text content is editable within each component file. Simply locate the text you want to change and update it.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ⚡ Performance

- Optimized images from Unsplash CDN
- Efficient component rendering
- Smooth animations and transitions
- Lazy loading where applicable

## 🔧 Development

### Adding New Sections
1. Create a new component in `/src/app/components/`
2. Import it in `App.tsx`
3. Add navigation link in `Header.tsx`
4. Ensure section has an `id` attribute for smooth scrolling

### Styling Guidelines
- Use Tailwind utility classes
- Follow the existing color scheme
- Maintain consistent spacing (px-4, py-8, etc.)
- Use responsive classes (md:, lg:, etc.)

## 📞 Contact Information (Update Before Deployment)

Update the following contact details in the components:
- Phone: `+91 123 456 7890`
- Email: `info@nimkarhospital.com`
- Address: Update in Contact.tsx and Footer.tsx
- Social media links: Update in Footer.tsx
- WhatsApp: Update in Contact.tsx

## 📄 License

This project is created for Nimkar Hospital.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Built with React and Tailwind CSS

---

**Note**: This is a static website. For dynamic features like appointment booking, integrate with a backend service or database.
