/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "cinnamon.agency"
    ]
  }
}

module.exports = nextConfig
