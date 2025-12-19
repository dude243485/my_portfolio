# My Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

To check if you have Node.js and npm installed, run: 

```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

Follow these step-by-step instructions to run the application locally:

### Step 1: Clone the Repository

```bash
git clone https://github.com/dude243485/my_portfolio.git
```

### Step 2: Navigate to the Project Directory

```bash
cd my_portfolio
```

### Step 3: Install Dependencies

Install all required packages using npm: 

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

Or if you prefer pnpm: 

```bash
pnpm install
```

This will install all dependencies listed in `package.json`, including React, TypeScript, Vite, Tailwind CSS, and other required packages.

### Step 4: Start the Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Or with pnpm:

```bash
pnpm dev
```

The application will start and you should see output similar to: 

```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network:  use --host to expose
```

### Step 5: Open in Browser

Open your web browser and navigate to:

```
http://localhost:5173
```

You should now see your portfolio website running locally!  🎉

## 📜 Available Scripts

In the project directory, you can run: 

### `npm run dev`

Runs the app in development mode with hot module replacement (HMR).  
Open [http://localhost:5173](http://localhost:5173) to view it in the browser. 

### `npm run build`

Builds the app for production to the `dist` folder.  
It compiles TypeScript and bundles React code for optimal performance.

```bash
npm run build
```

### `npm run preview`

Previews the production build locally before deployment.  
First build the app, then run: 

```bash
npm run preview
```

### `npm run lint`

Runs ESLint to check for code quality issues and potential errors.

```bash
npm run lint
```

## 🚀 Building for Production

To create a production-ready build:

### Step 1: Build the Application

```bash
npm run build
```

This will: 
- Compile TypeScript code
- Bundle and minify JavaScript
- Optimize assets
- Output everything to the `dist` folder

### Step 2: Preview the Production Build (Optional)

```bash
npm run preview
```

This serves the production build locally so you can test it before deployment.

## 📁 Project Structure

```
my_portfolio/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # React components
│   ├── data/        # Data files
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles with Tailwind
├── index.html       # HTML entry point
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── README.md        # This file
```

## 🔧 Configuration

- **Vite Config**: `vite.config.ts` - Build tool configuration
- **TypeScript Config**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **ESLint Config**: `eslint.config.js` - Code linting rules
- **Tailwind CSS**: Configured via `@tailwindcss/vite` plugin

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a custom port:

```bash
npm run dev -- --port 3000
```

### Module Not Found Errors

If you encounter module errors, try deleting `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Make sure you're using a compatible TypeScript version:

```bash
npm install typescript@~5.9.3
```

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

**dude243485**

- GitHub: [@dude243485](https://github.com/dude243485)

---

Made with ❤️ using React, TypeScript, and Vite