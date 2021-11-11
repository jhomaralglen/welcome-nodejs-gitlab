const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const handleErrors = require('./src/middleware/handleErrors');
const { NotFound } = require('./src/utils/errors');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

require('./src/app/routes')(app);
app.use(function (req, res, next) {
  throw new NotFound('Not Found');
})
app.use(handleErrors);

app.listen(port, ip, () => {
  console.log('Server running on http://%s:%s', ip, port);
});

module.exports = app;