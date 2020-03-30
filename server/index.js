/** @format */

const path = require('path');
const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');

const routes = require('../routes');

const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('../i18n');

const port = parseInt(process.env.PORT, 10) || 3100;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => nextI18next.initPromise)
  .then(() => {
    const server = express();

    server.use(helmet());
    server.use(compression());
    server.use(nextI18NextMiddleware(nextI18next));

    const staticPath = path.join(__dirname, '../static');
    server.use(
      '/static',
      express.static(staticPath, {
        maxAge: '30d',
        immutable: true
      })
    );

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    startServer();

    function startServer() {
      server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
      });
    }
  });
