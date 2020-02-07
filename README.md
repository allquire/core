# AllQuire

Require from anywhere.

```js
const allquire = require('@allquire/core')
const greeting = await allquire(
  'https://npmjs.com/package/@allquire/hello-world'
)
console.log(greeting()) // Hello World!
```
