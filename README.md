# Testomatio Docs Builder

Documentation is saved as static markdown files under `src/content/docs`.

## 📋 Editing a Page

* Recommended to open VSCode editor by pressing `.`.
* Open a markdown file inside `src/content/docs` directory
* Save and commit

## 🔨 Customization

This static website is built with Astro Starlight.

### Prerequisites

Before starting the website locally, you need to install:

1. **Bun** - A fast JavaScript runtime and package manager
   ```bash
   # Install Bun
   curl -fsSL https://bun.sh/install | bash
   # Or using npm: npm install -g bun
   ```

2. **Bunosh** - A modern task runner for JavaScript
   ```bash
   bun add -g bunosh
   ```

### Setup and Development

To start the website locally:

1. **Clone this repo**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Fetch all documentation pages**
   ```bash
   bunosh docs
   ```

4. **Start the development server**
   ```bash
   bun run dev
   ```

### Available Commands

- `bunosh docs` - Fetch and generate all documentation
- `bunosh docs:importer` - Import external documentation from GitHub
- `bunosh docs:reporter` - Generate reporter documentation
- `bunosh docs:images` - Process documentation images
- `bun run dev` - Start development server
- `bun run build` - Build for production

