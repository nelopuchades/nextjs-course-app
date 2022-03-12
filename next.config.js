const nextEnv = require('next-env');
const dotEnvLoad = require('dotenv-load');

dotEnvLoad();

const withEnv = nextEnv();
module.exports = withEnv();
