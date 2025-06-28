# WAVELOOP Official website

A modern Next.js application built with Bun and enhanced with Git hooks using Husky for code quality enforcement.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Node.js](https://nodejs.org/) (18.0 or later)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WAVELOOP-Development/waveloop-web
cd waveloop-web
```

2. Install dependencies using Bun:
```bash
bun install
```

3. Set up Git hooks:
```bash
bun run prepare
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Package Manager

This project uses [Bun](https://bun.sh/) as the package manager for faster dependency installation and runtime performance.

### Common Bun Commands

```bash
# Install dependencies
bun install

# Add a new dependency
bun add <package-name>

# Add a dev dependency
bun add -d <package-name>

# Remove a dependency
bun remove <package-name>

# Run scripts
bun run <script-name>
```

## 🔧 Available Scripts

- `bun dev` - Start the development server
- `bun build` - Build the application for production
- `bun start` - Start the production server
- `bun lint` - Run ESLint
- `bun lint:fix` - Run ESLint with auto-fix
- `bun type-check` - Run TypeScript type checking
- `bun prepare` - Set up Husky Git hooks

## Git Hooks (Husky)

This project uses [Husky](https://typicode.github.io/husky/) to enforce code quality through Git hooks:

### Pre-commit Hook
- Runs linting and formatting checks
- Performs type checking
- Ensures code quality standards

### Pre-push Hook
- Runs all tests
- Performs final validation before pushing

### Hook Configuration

Git hooks are automatically installed when you run `bun install` or `bun run prepare`. The hooks are configured in the `.husky/` directory.

## Project Structure

```
├── public/                 # Static files
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── styles/           # Global styles
├── .husky/               # Git hooks configuration
├── .env.example          # Environment variables template
├── .env.local            # Local environment variables (gitignored)
├── .gitignore            # Git ignore rules
├── .eslintrc.json        # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Configuration

### Next.js Configuration

The application is configured in `next.config.js` with optimizations for performance and development experience.

### TypeScript

This project uses TypeScript for type safety. Configuration is in `tsconfig.json`.

## Code Quality

### ESLint
ESLint is configured to maintain code quality and consistency. Rules are defined in `.eslintrc.json`.

### Prettier
Prettier is used for code formatting and is integrated with ESLint.

### Husky Hooks
Git hooks ensure that code quality checks are run automatically:

- **pre-commit**: Linting, formatting, and type checking
- **pre-push**: Full test suite
- **commit-msg**: Commit message validation


## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Made by team WAVELOOP using [Next.js](https://nextjs.org/), [Bun](https://bun.sh/), and [Husky](https://typicode.github.io/husky/)
