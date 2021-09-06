module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '/index.ts',
          '/index.tsx',
          '/index.js',
          '/index.jsx',
          '.json'
        ],
        alias: {
          Lib: './src/lib',
          Theme: './src/theme',
          Store: './src/store',
          Components: './src/components',
          Scenes: './src/scenes',
          Navigators: './src/navigators'
        }
      }
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg']
      }
    ]
  ]
};
