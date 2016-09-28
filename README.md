# electron-pages

[![NPM version](https://img.shields.io/npm/v/electron-pages.svg?style=flat-square)](https://npmjs.com/package/electron-pages) [![NPM downloads](https://img.shields.io/npm/dm/electron-pages.svg?style=flat-square)](https://npmjs.com/package/electron-pages)

## Install

```bash
$ npm install --save electron-pages
```

## Usage

```js
// usually userd in renderer process
const when = require('electron-pages')

// when you load index.html in electron
when('index', () => {
  // bootstrap your main app
})

// when you load about.html in electron
when('about', () => {
  // bootstrap the app for about page
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
