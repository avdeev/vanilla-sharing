module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        forceAllTransforms: true,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
