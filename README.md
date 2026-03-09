# Prisma Design System Prototype Starter

A Next.js starter repository for building prototypes using the Prisma design system. This project is pre-configured to access the private Prisma npm registry and includes all necessary tooling to get started quickly.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Access to the Prisma design system npm registry

### Environment Setup

This project requires the `GAR_JSON_KEY` environment variable to authenticate with the Google Artifact Registry (GAR) where the Prisma design system packages are hosted.

#### Setting up GAR_JSON_KEY

1. **Obtain your service account JSON key** from your Google Cloud Console
2. **Base64 encode the JSON key twice**:

```bash
# First encoding
echo -n '<your-json-key>' | base64 > encoded_once.txt

# Second encoding
cat encoded_once.txt | base64 > encoded_twice.txt

# The content of encoded_twice.txt is your GAR_JSON_KEY value
```

3. **Set the environment variable**:

```bash
# For local development, add to .env.local
echo "GAR_JSON_KEY=<your-double-encoded-key>" >> .env.local
```

> ⚠️ **Important**: The JSON key must be base64 encoded **twice** for proper authentication.

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your prototype.

## 📦 NPM Registry Configuration

This project is configured to use the private Prisma npm registry hosted on Google Artifact Registry. The configuration is set in `.npmrc`:

```
registry = https://europe-npm.pkg.dev/edo-prod-resources/npm-all/
//europe-npm.pkg.dev/edo-prod-resources/npm-all/:_password="${GAR_JSON_KEY}"
```

## 🎨 Using Prisma Design System

Once authenticated, you can install and use Prisma design system packages:

```bash
npm install @prisma/design-system-component
```

```tsx
import { Button } from '@prisma/design-system-component';

export default function MyPrototype() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

## 🏗️ Project Structure

```
├── app/
│   ├── page.tsx              # Main prototype page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # Custom components
├── public/                   # Static assets
├── .npmrc                    # NPM registry configuration
└── .env.local               # Local environment variables (gitignored)
```

## 🚢 Deployment

### Vercel

1. Connect your repository to Vercel
2. Add the `GAR_JSON_KEY` environment variable in project settings
3. Deploy

### Other Platforms

Ensure the `GAR_JSON_KEY` environment variable is set in your hosting platform's environment configuration before deploying.

## 🔧 Troubleshooting

### Authentication Issues

If you encounter authentication errors when installing packages:

1. Verify `GAR_JSON_KEY` is set correctly
2. Ensure the key is base64 encoded **twice**
3. Check that your service account has access to the registry
4. Try clearing npm cache: `npm cache clean --force`

### Package Installation Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📚 Resources

- [Prisma Design System Documentation](#) (Internal)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google Artifact Registry](https://cloud.google.com/artifact-registry/docs)

## 🤝 Contributing

This is a starter template for Prisma design system prototypes. For design system contributions, please refer to the main Prisma design system repository.

---

**Built with:** Next.js 15, React 19, TypeScript  
**Registry:** Google Artifact Registry (Europe)
