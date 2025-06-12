/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      { source: '/.well-known/:path*', destination: '/.well-known/:path*' },
    ];
  },
}