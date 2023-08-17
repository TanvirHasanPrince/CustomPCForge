# PC Builder Website

Welcome to the PC Builder website repository! This is a web application built using React, Next.js, HTML, CSS (with Tailwind CSS), and JavaScript that allows users to easily build their own custom PC configurations using a variety of PC components.

## Table of Contents
- [PC Builder Website](#pc-builder-website)
  - [Table of Contents](#table-of-contents)
  - [Main Features](#main-features)
    - [Navbar](#navbar)
    - [Home Page (SSG implementation)](#home-page-ssg-implementation)
    - [Featured Category Sections (SSG implementation)](#featured-category-sections-ssg-implementation)
    - [Product Detail Page (SSG implementation)](#product-detail-page-ssg-implementation)
    - [PC Builder Page (SSR implementation)](#pc-builder-page-ssr-implementation)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Server](#server)
  - [Live Website](#live-website)
  - [Contributing](#contributing)
  - [License](#license)

## Main Features

### Navbar
- The navbar features a **PC Builder** button that redirects users to the PC Builder page.
- A Categories dropdown provides easy navigation to various component categories.

### Home Page (SSG implementation)
- The home page showcases featured products and categories.
- Each featured product card includes details such as image, product name, category, price, availability, and rating.
- Featured products and categories are clickable, leading to the respective product detail or category pages.

### Featured Category Sections (SSG implementation)
- Clicking on featured categories redirects users to pages displaying products from the chosen category.
- Product cards on these pages include essential information like image, product name, category, price, availability, and rating.

### Product Detail Page (SSG implementation)
- Detailed information about each PC component, including image, product name, category, availability, price, description, key features, individual and average rating, and reviews.

### PC Builder Page (SSR implementation)
- The PC Builder page allows users to choose components for their custom PC.
- Components are categorized (CPU, Motherboard, RAM, etc.) with a "Select" button.
- Selected components can be added to the PC Builder section.
- A "Complete Build" button becomes active when all the components are added.

## Tech Stack

- React
- Next.js
- HTML
- CSS (with Tailwind CSS)
- JavaScript

## Getting Started

### Prerequisites
- Node.js (version X.X.X)
- npm or yarn

### Installation
1. Clone this repository: `git clone https://github.com/yourusername/pc-builder.git`
2. Navigate to the project directory: `cd pc-builder`
3. Install dependencies: `npm install` or `yarn install`

## Usage
1. Run the development server: `npm run dev` or `yarn dev`
2. Access the application in your web browser: `http://localhost:3000`


## Server

The API server for this project is hosted at: [https://custom-pc-forge-server.vercel.app](https://custom-pc-forge-server.vercel.app)

## Live Website

Access the live website at: [https://custom-pc-forge.vercel.app](https://custom-pc-forge.vercel.app)

## Contributing

Contributions are welcome! If you find a bug or have an idea for an enhancement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

This README outlines the main features, tech stack, setup instructions, and additional resources for the PC Builder website. For more detailed documentation, code comments, and architecture overview, please refer to the source code.
