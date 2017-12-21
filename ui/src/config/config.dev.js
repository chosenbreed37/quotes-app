const config = {};

config.api_url = process.env.API_URL || 'http://192.168.99.100:3003';
config.env = process.env.NODE_ENV || 'development';

export default config;

