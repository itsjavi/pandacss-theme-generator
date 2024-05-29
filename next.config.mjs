import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['http://localhost:3000', 'https://pandacss-theme-generator.vercel.app'],
    },
  },
  webpack: (config, { isServer }) => {
    const moduleShim = path.join(process.cwd(), './module.shim.ts')
    const fsShim = path.join(process.cwd(), './fs.shim.ts')
    // aliases for resolving packages in the project
    config.resolve.alias = {
      ...config.resolve.alias,
      process: 'process/browser',
      'node:process': 'process/browser',
      os: 'os-browserify',
      'node:os': 'os-browserify',
      path: 'path-browserify',
      'node:path': 'path-browserify',
      util: 'util',
      'node:util': 'util',
      module: moduleShim,
      'node:module': moduleShim,
      fs: fsShim,
      'node:fs': fsShim,
      lightningcss: 'lightningcss-wasm',
      '@vue/compiler-sfc': '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js',
    }

    if (!isServer) {
      config.resolve.fallback = {
        perf_hooks: false,
      }
    }

    config.module.rules.push({
      resourceQuery: /raw/,
      loader: 'raw-loader',
    })

    return config
  },
}

export default nextConfig
