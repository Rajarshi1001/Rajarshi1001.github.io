/** @type {import('next').NextConfig} */

// GitHub Pages serves a *project* site (anything except <user>.github.io) from
// https://<user>.github.io/<repo>/ — so the app needs to know its own base path
// at build time. Set REPO_NAME to your repository name before building, e.g.:
//
//   REPO_NAME=rd-portfolio npm run build
//
// Leave it unset if you're deploying to a *user/org* site (a repo literally
// named <user>.github.io), which is served from the domain root.
const repoName = process.env.REPO_NAME || '';
const isUserSite = repoName === '' || repoName.endsWith('.github.io');
const basePath = isUserSite ? '' : `/${repoName}`;

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
};

export default nextConfig;
