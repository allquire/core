const allquire = require('./index')

test('Install @allquire/hello-world Module From npm', async () => {
  expect((await allquire('npmjs.com/@allquire/hello-world'))()).toBe(
    'Hello World!'
  )
}, 100000)

test('Install @allquire/hello-world Module, Auto Detect', async () => {
  expect((await allquire('npmjs.com/@allquire/hello-world'))()).toBe(
    'Hello World!'
  )
}, 100000)
