# Contributing to Modern Portfolio Template

Thank you for your interest in contributing to this project! We appreciate your help in making this portfolio template better for everyone.

## 🚀 How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement:

1. **Check existing issues** first to avoid duplicates
2. **Use the issue templates** when creating new issues
3. **Provide clear descriptions** with steps to reproduce (for bugs)
4. **Include screenshots** when relevant

### Submitting Changes

1. **Fork the repository** to your GitHub account
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our guidelines
4. **Test your changes** thoroughly
5. **Commit with clear messages**:
   ```bash
   git commit -m "feat: add new component for testimonials"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** with a clear description

## 📋 Development Guidelines

### Code Style

- Use **TypeScript** for all new code
- Follow **ESLint** and **Prettier** configurations
- Use **semantic commit messages** (feat, fix, docs, style, refactor, test, chore)
- Write **self-documenting code** with clear variable and function names

### Component Guidelines

- Keep components **small and focused**
- Use **TypeScript interfaces** for props
- Follow the **existing naming conventions**
- Add **JSDoc comments** for complex functions
- Ensure components are **responsive** and **accessible**

### Testing

- Test your changes on **multiple devices** and browsers
- Ensure **accessibility standards** are met
- Check **performance impact** of your changes
- Verify **dark/light mode** compatibility

## 🎨 Design Guidelines

### UI/UX Principles

- Maintain **visual consistency** with existing design
- Follow **mobile-first** responsive design
- Ensure **smooth animations** and transitions
- Keep **loading times** minimal
- Maintain **accessibility** standards (WCAG 2.1)

### Color and Typography

- Use the existing **design system** and CSS variables
- Maintain **color contrast** ratios
- Follow the **typography scale**
- Test in both **dark and light modes**

## 📁 Project Structure

When adding new components or features:

```
components/
├── ui/              # Reusable UI components
├── sections/        # Page sections (hero, about, etc.)
└── features/        # Feature-specific components

lib/
├── utils.ts         # Utility functions
├── constants.ts     # App constants
└── types.ts         # TypeScript types
```

## 🔧 Technical Requirements

### Environment Setup

1. **Node.js** 18.17 or later
2. **pnpm** (preferred), npm, or yarn
3. **Git** for version control

### Before Submitting

1. **Run the build** to ensure no errors:
   ```bash
   pnpm build
   ```

2. **Check linting**:
   ```bash
   pnpm lint
   ```

3. **Type check**:
   ```bash
   pnpm type-check
   ```

4. **Test in development**:
   ```bash
   pnpm dev
   ```

## 📚 Documentation

### Code Documentation

- Add **JSDoc comments** for complex functions
- Update **README.md** if you add new features
- Include **examples** in component documentation
- Document any **breaking changes**

### README Updates

If your contribution adds new features:
- Update the **Features** section
- Add **usage examples**
- Update **installation instructions** if needed
- Include **screenshots** for visual changes

## 🏷️ Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
feat: add testimonials section component
fix: resolve mobile navigation overlay issue
docs: update installation instructions
style: improve button hover animations
refactor: extract common utility functions
```

## 🤝 Code of Conduct

### Our Standards

- **Be respectful** and inclusive
- **Provide constructive feedback**
- **Focus on the best solution** for the community
- **Help others learn** and grow

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Unprofessional conduct

## 🎯 Types of Contributions

### 🐛 Bug Fixes
- Fix responsive design issues
- Resolve accessibility problems
- Correct TypeScript errors
- Fix broken links or functionality

### ✨ New Features
- Additional portfolio sections
- New UI components
- Enhanced animations
- Improved functionality

### 📚 Documentation
- Improve README clarity
- Add code examples
- Create tutorials
- Fix typos and grammar

### 🎨 Design Improvements
- Better visual design
- Improved user experience
- Enhanced animations
- Better mobile responsiveness

## 🆘 Getting Help

If you need help with your contribution:

1. **Check the documentation** first
2. **Search existing issues** for similar questions
3. **Create a discussion** for general questions
4. **Ask in issues** for specific problems

## 📞 Contact

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: [your.email@example.com](mailto:your.email@example.com) for sensitive matters

---

Thank you for contributing to the Modern Portfolio Template! 🎉
