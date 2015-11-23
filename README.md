# PCR Node SDK

[![Build Status](https://travis-ci.org/pennlabs/pcr-sdk-node.svg)](https://travis-ci.org/pennlabs/pcr-sdk-node)

A Node.js wrapper for the Penn Course Review API.

## Install
To get started, just run

```
npm install pcr
```

## Overview

```javascript
var PCR = require("pcr")

pcr = new PCR("API_TOKEN")
pcr.department("CHEM", function(err, result) {
  if (!err) {
    console.log(result)
  }
})
```

## Requesting an API token

To use this library, you must first obtain an API token for Penn Course Review, which can be done [here](https://docs.google.com/spreadsheet/viewform?hl=en_US&formkey=dGZOZkJDaVkxdmc5QURUejAteFdBZGc6MQ#gid=0).

## Contributing

We'd love to accept pull requests! Also, file bugs or ask questions in GitHub issues if you have any problems.

### Getting Started

1. Fork the repository using GitHub's interface
2. Git clone your repository using `git clone YOUR_GIT_URL`
3. Install the required dependencies using `npm install`.
4. Start editing the CoffeeScript source files in `src`.
5. Write tests!
6. Make a pull request back to the original repository.

### Building

The SDK is written in [ES6](http://es6-features.org/), so please make your changes in the JS source files in `src` and they can be compiled into ES5 JavaScript using `make js`.

### Testing

You can test the work you have using `make test`, which uses [Mocha](http://mochajs.org/) to run the tests inside of the `test` directory. You should have environment variables in your shell that specify your API keys in the format `PCR_API_TOKEN`.
If you prefer to have these tests run while you're editing automatically, you can run `make watchtest` from your terminal.

### TODO

- [X] Penn Course Review API
- [ ] Documentation

## Authors

* Adel Qalieh

## License

[MIT Licensed](LICENSE)
