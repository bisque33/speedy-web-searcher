/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? "/speedy-web-searcher" : "",
  reactStrictMode: true,
}

module.exports = nextConfig
