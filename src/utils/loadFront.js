const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports =
  process.env.NODE_ENV === 'production'
    ? express.static(path.resolve(__dirname, '..', 'client', 'build'))
    : createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
      });
