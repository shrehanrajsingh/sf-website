# Contributing to Sunflower Website

Thank you for your interest in contributing to the Sunflower Website! We welcome contributions from the community and are grateful for your support.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. Please be kind, considerate, and constructive in your interactions.

## Getting Started

1. **Fork the repository** - Click the "Fork" button at the top right of the repository page
2. **Clone your fork** - Clone the forked repository to your local machine
   ```bash
   git clone https://github.com/YOUR_USERNAME/sf-website.git
   cd sf-website
   ```
3. **Add upstream remote** - Add the original repository as an upstream remote
   ```bash
   git remote add upstream https://github.com/shrehanrajsingh/sf-website.git
   ```

## Development Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun package manager
- Git

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Tech Stack

- **Framework**: Next.js 15.4.10
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (JSX)

## How to Contribute

### Finding Issues to Work On

1. Check the [Issues](https://github.com/shrehanrajsingh/sf-website/issues) page
2. Look for issues labeled `good first issue` or `help wanted`
3. Comment on the issue to express your interest and get it assigned to you
4. Wait for maintainer approval before starting work

### Working on an Issue

1. **Sync your fork** with the upstream repository:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes** following the coding standards

4. **Test your changes** thoroughly:
   ```bash
   npm run build
   npm run lint
   ```

5. **Commit your changes** following the commit guidelines

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** from your fork to the main repository

## Coding Standards

### JavaScript/JSX

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### File Structure

- Place components in appropriate directories
- Use `.jsx` extension for React components
- Keep related files together

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Use semantic color names

### Example Component Structure

```jsx
// Good example
export default function ComponentName() {
  const [state, setState] = useState(initialValue);

  const handleAction = () => {
    // Handle action logic
  };

  return (
    <div className="container mx-auto px-4">
      {/* Component content */}
    </div>
  );
}
```

## Commit Guidelines

We follow conventional commit messages for clarity and consistency:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(navbar): add mobile menu toggle functionality

fix(search): resolve search results not displaying correctly

docs(readme): update installation instructions

style(homepage): improve responsive layout for mobile devices
```

## Pull Request Process

1. **Ensure your PR**:
   - Addresses a specific issue (reference it with `Fixes #issue-number`)
   - Includes a clear description of changes
   - Has been tested locally
   - Follows the coding standards
   - Passes all linting checks

2. **PR Title Format**:
   ```
   <type>: <brief description>
   ```
   Example: `feat: Add dark mode toggle`

3. **PR Description Template**:
   ```markdown
   ## Description
   Brief description of what this PR does

   ## Related Issue
   Fixes #issue-number

   ## Changes Made
   - Change 1
   - Change 2
   - Change 3

   ## Screenshots (if applicable)
   Add screenshots here

   ## Testing
   Describe how you tested these changes

   ## Checklist
   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated (if needed)
   - [ ] No new warnings generated
   - [ ] Tested locally
   ```

4. **Review Process**:
   - Wait for maintainer review
   - Address any requested changes
   - Keep the PR updated with the main branch
   - Be responsive to feedback

5. **After Approval**:
   - Maintainers will merge your PR
   - Your contribution will be part of the project!

## Issue Guidelines

### Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Use a clear title** that describes the problem/feature
3. **Provide detailed description**:
   - For bugs: Steps to reproduce, expected vs actual behavior, screenshots
   - For features: Use case, proposed solution, mockups (if applicable)
4. **Add appropriate labels** (if you have permission)

### Issue Template

```markdown
## Description
Clear description of the issue or feature request

## Steps to Reproduce (for bugs)
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
Add screenshots if applicable

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, Mobile]
```

## Community

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **Pull Requests**: For code contributions and discussions
- **Discussions**: For general questions and community interaction

### Getting Help

- Check existing issues and documentation first
- Ask questions in GitHub Discussions
- Be patient and respectful when seeking help

### Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation (if applicable)
- Release notes for significant contributions

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

## Questions?

If you have any questions about contributing, feel free to:
- Open a discussion on GitHub
- Comment on relevant issues
- Reach out to the maintainers

---

Thank you for contributing to Sunflower Website! Your efforts help make this project better for everyone. 🌻
