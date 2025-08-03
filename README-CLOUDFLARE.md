# Cloudflare Workers Deployment

This project is configured to deploy to Cloudflare Workers with static assets using Wrangler CLI.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Cloudflare Account Setup
1. Sign up/login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Get your Account ID from the right sidebar
3. Create an API token at [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Use the "Edit Cloudflare Workers" template
   - Copy the generated token

### 3. Local Environment Setup
```bash
cp .env.example .env
# Edit .env and add your CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN
```

### 4. GitHub Secrets Setup (for CI/CD)
Add these secrets to your GitHub repository:
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token

Go to: Repository Settings → Secrets and Variables → Actions → New repository secret

## Deployment

### Manual Deployment
```bash
# Deploy to Cloudflare Workers
npm run deploy-cf-worker
```

### Automatic Deployment
- **Staging**: Deploys automatically on pull requests to `main`
- **Production**: Deploys automatically when pushing to `main` branch

## Configuration

- `wrangler.toml`: Cloudflare Workers configuration with static assets
- `src/worker.js`: Worker script for handling static file serving
- `.github/workflows/deploy-cloudflare.yml`: GitHub Actions workflow
- `package.json`: Contains the `deploy-cf-worker` script

## How It Works

This setup uses Cloudflare Workers with static assets to:
1. Serve your Docusaurus build files from the `./build` directory
2. Handle SPA routing for client-side navigation
3. Provide fast global edge distribution

## Environments

- **Production**: `treasurenet-docs` (main branch)
- **Staging**: `treasurenet-docs-staging` (pull requests)

## Commands

- `npm run build`: Build the Docusaurus site
- `npm run deploy-cf-worker`: Build and deploy to Cloudflare Workers
- `npx wrangler dev`: Local development with Wrangler
- `npx wrangler deploy`: Deploy to production

## Troubleshooting

1. **Authentication errors**: Ensure your API token has the correct permissions
2. **Project name conflicts**: Update the project name in `wrangler.toml` and `package.json`
3. **Build failures**: Check that `npm run build` works locally first

## More Information

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Docusaurus Deployment](https://docusaurus.io/docs/deployment)