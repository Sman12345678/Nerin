# Nerin Liplush - Cosmetics E-commerce Website

## Overview

Nerin Liplush is a modern, responsive e-commerce website for a premium cosmetics brand specializing in lipstick and lip gloss products. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a pink and white elegant design theme with floral animations. The website provides product browsing, WhatsApp integration for purchases, customer testimonials, and an admin panel for product management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for client-side routing with pages for Home, Products, About, Contact, and Admin
- **State Management**: TanStack Query (React Query) for server state management
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Animations**: CSS animations and Tailwind classes for floral-themed animations and smooth transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: Hot reloading with Vite middleware in development mode
- **API Routes**: RESTful endpoints for products, contact forms, and admin operations
- **File System**: JSON-based data storage for products, testimonials, and FAQ data
- **Session Handling**: Basic session management with middleware logging

### Data Storage
- **Product Data**: Static JSON files stored in `client/src/data/` directory
- **Database Schema**: Drizzle ORM configured for PostgreSQL with user authentication tables
- **Environment Variables**: WhatsApp number, CEO image URL, and other configuration stored in environment variables
- **File Uploads**: Basic file handling for product images with fallback URLs

### Component Architecture
- **Layout Components**: Navigation bar, footer, and floating WhatsApp button
- **Section Components**: Hero section, testimonials, FAQ accordion, and product grids
- **UI Components**: Comprehensive shadcn/ui component library including cards, buttons, forms, and dialogs
- **Product Components**: Reusable product cards with WhatsApp integration for purchase buttons

### Styling and Theming
- **Design System**: Custom CSS variables for brand colors (pink and white theme)
- **Typography**: Multiple Google Fonts including Playfair Display (serif), Inter (sans-serif), and Dancing Script (cursive)
- **Responsive Breakpoints**: Tailwind's default breakpoint system for mobile, tablet, and desktop layouts
- **Animations**: Floating floral elements, fade-in effects, and hover transitions

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18+ with TypeScript, Vite build tool, and Wouter for routing
- **TanStack Query**: Server state management and data fetching
- **Drizzle ORM**: Database toolkit with PostgreSQL support via @neondatabase/serverless
- **Express.js**: Node.js web framework for API endpoints

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **shadcn/ui**: React component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and functionality
- **Google Fonts**: External font loading for typography (Playfair Display, Inter, Dancing Script)

### Third-party Integrations
- **WhatsApp Business API**: Direct messaging integration for customer inquiries and purchases
- **Image Hosting**: External image URLs (im.ge service) for product photography
- **Replit Integration**: Development environment tools and error overlays

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Development Middleware**: Vite's development server with HMR support

### Data and Content
- **JSON Data Files**: Static storage for products, testimonials, and FAQ content
- **Environment Configuration**: Secure storage of API keys, WhatsApp numbers, and image URLs
- **Form Handling**: React Hook Form with Zod validation for contact forms and admin panels