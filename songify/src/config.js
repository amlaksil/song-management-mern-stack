const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
const API_BASE_URL = `http://${host}:${port}/api/v1`;

module.exports = {
  host,
  port,
  API_BASE_URL,
};
