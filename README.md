<div align="center">
  <h1><a href="https://allquire.github.io" target="_blank">AllQuire</a></h1>

  <p style="font-size: 20px;">Require from Anywhere & Typescript Dynamic Require</p>

[![npm](https://nodei.co/npm/@allquire/core.png)](https://npmjs.com/package/@allquire/core)

![Language](https://img.shields.io/badge/language-javascript-orange?style=flat-square)
![I18N](https://img.shields.io/badge/support-javascript%7Ctypescript-brightgreen?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
[![License](https://img.shields.io/github/license/allquire/core?style=flat-square)](https://github.com/allquire/core/blob/master/LICENSE)

</div>

Require from anywhere & Typescript dynamic require.

## 🌟 Features

- **Require from anywhere.**

Feel free to require even the module hasn't been installed. Packages will be installed when the `allquire()` calls for the first time.

<details>
<summary>Why should packages be installed during runtime?</summary>

This greatly increases the convenience for users to use the program. Imagine a scenario that a system has many extensible plugins, but users only want to use a few plugins usually. In this case, it is not appropriate to include all plugins in the application package.

AllQuire is an excellent solution to this problem. You can let users provide a list of plugins with options into a config file, and import it using [cosmiconfig](https://www.npmjs.com/package/cosmiconfig), or use the companion GUI to generate the list for your application.

An example working in progress is [VkiQ](https://github.com/vkiq/core).

</details>

- **Typescript dynamic require.**

Typescript is not as flexible as JavaScript because it does not support changing the module ID of require at runtime. Use AllQuire to dynamically provide module ID and require the module you want.

<details>
<summary>Why I need dynamic require in Typescript?</summary>

Imagine a scenario that your Typescript backend service needs to dynamically import all routes from the `api` folder and apply them when it starts. At this time, you may need to use `for.. of` to traverse each route, but Typescript does not support dynamically providing the module ID that needs to be required.

AllQuire can solve this problem. Just use `allquire(route)` to require them.

</details>

## 💨 Install

Install with yarn:

```sh
yarn add @allquire/core
```

Install with npm:

```sh
npm i -S @allquire/core
```

## 👉 Usage

Use with JavaScript:

```js
const allquire = require('@allquire/core')
const greeting = await allquire(
  'https://npmjs.com/package/@allquire/hello-world'
)
console.log(greeting()) // Hello World!
```

Use with TypeScript:

```ts
import allquire from '@allquire/core'
const greeting: HelloWorld = await allquire(
  'https://npmjs.com/package/@allquire/hello-world'
)
console.log(greeting()) // Hello World!
```

## 💬 BUGs & Issues

Feel free to [open issues](https://github.com/allquire/core/issues/new).

## 💻 Contributions

PRs are welcome! Feel free to contribute on this project.

### Plugin Contributions

Feel free to make AllQuire Plugins and add a line in [plugins.js](https://github.com/allquire/core/blob/master/plugins.js)!

## ⚠ LICENSE

MIT
