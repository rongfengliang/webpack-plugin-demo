# demo webpack plugin 

## how to running

* bootstrap lerna project

```code
yarn bootstrap
```

* run plugin

```code
yarn build
```

* some result

```shell
yarn run v1.13.0
$ lerna run build
lerna notice cli v3.8.0
lerna info Executing command in 1 package: "npm run build"
lerna info run Ran npm script 'build' in 'app' in 2.1s:

> app@0.0.0 build /Users/dalong/mylearning/webpack-plugin-demo/userlogin/packages/app
> webpack

Hello World!
{ name: 'dalong demo plugin', version: 'v1.0.0' }
Hash: 99b708a3fc0fdba5e1c2
Version: webpack 4.29.3
Time: 350ms
Built at: 2019-02-14 13:45:22
                     Asset        Size  Chunks             Chunk Names
my-first-webpack.bundle.js  1020 bytes       0  [emitted]  main
Entrypoint main = my-first-webpack.bundle.js
[0] ./lib/app.js 145 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
lerna success run Ran npm script 'build' in 1 package in 2.1s:
lerna success - app
✨  Done in 3.05s.
```