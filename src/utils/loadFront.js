const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { clientFolder } = require('../config');

module.exports =
  process.env.NODE_ENV === 'production'
    ? express.static(path.resolve(clientFolder, 'build'))
    : createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
      });
