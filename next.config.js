/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    basePath: '',
      env: {
          app_name:'Survey BoilterPalte',
          api_url: '',
          per_page:10,
          per_page_list:[10,20,50,100],
        },
        
  }
module.exports = nextConfig
