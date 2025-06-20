# Next.js Portfolio

This is a portfolio website built using Next.js 14, TypeScript, and Tailwind CSS. The project showcases various features and components that demonstrate modern web development practices.

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes.
- **Dark/Light Theme**: Users can switch between dark and light themes using the ThemeSwitcher component.
- **Project Showcase**: Individual projects are displayed using the ProjectCard component, highlighting the title, description, and technologies used.
- **Contact Form**: A functional contact form allows users to send inquiries.
- **Blog Integration**: The BlogList component fetches and displays blog posts from a CMS.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nextjs-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **Next.js 14**: A React framework for building server-side rendered applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Folder Structure

- `src/app`: Contains the main application layout and global styles.
- `src/components`: Contains reusable components such as Header, Footer, and ProjectCard.
- `src/features`: Contains feature-specific components like ContactForm and BlogList.
- `src/hooks`: Contains custom hooks like useTheme for managing theme state.
- `src/lib`: Contains API functions for data fetching.
- `src/types`: Contains TypeScript interfaces and types.
- `src/utils`: Contains utility functions for various tasks.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.