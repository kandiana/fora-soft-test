const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const mainRouter = new express.Router();

mainRouter.use(
  '/',
  process.env.NODE_ENV === 'production'
    ? express.static(path.resolve(__dirname, '..', 'client', 'build'))
    : createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
      })
);

exports.mainRouter = mainRouter;
