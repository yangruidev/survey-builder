const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: ['env', 'es2015', 'stage-3', 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
    isTest ? 'dynamic-import-node' : null
  ].filter(Boolean) //remove falsy items
};
