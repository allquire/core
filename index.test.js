const allquire = require('./index')

test('Install @allquire/hello-world Module', async () => {
  expect((await allquire('npmjs.com/@allquire/hello-world'))()).toBe(
    'Hello World!'
  )
})
