/* eslint-disable no-console */
const app = require('./app');

const port = process.env.PORT || 7000;
const server = app.listen(port, () => console.log(`server running on port ${server.address().port}`));

module.exports = app;
