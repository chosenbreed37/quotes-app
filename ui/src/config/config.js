const config = {};

const host = (process.env.REACT_APP_API_HOST || 'localhost').trim();
const port = (process.env.REACT_APP_API_PORT || '3003').trim();

config.api_url = `http://${host}:${port}`;

console.log('>>> config: ', config);

export default config;

