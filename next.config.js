/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
