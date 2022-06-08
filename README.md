# TalkJS

[![Continuous Integrations](https://github.com/vinicius1889/talkjs/actions/workflows/continuous-integrations.yaml/badge.svg?branch=main)](https://github.com/vinicius1889/talkjs.git/actions/workflows/continuous-integrations.yaml)
[![License](https://badgen.net/github/license/vinicius1889/talkjs)](./LICENSE)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install talkjs --save

# For Yarn, use the command below.
yarn add talkjs
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/talkjs"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/talkjs"></script>

<script>
  // UMD module is exposed through the "talkjs" global variable.
  console.log(talkjs);
</script>
```

## Samples

## If

```javascript
const isValid = If.of(2)
  .is(2)
  .is((value: number) => value % 2 === 0)
  .check();

if (isValid) {
  // do something
}
```

```javascript
const isValid = If.of(20).is(2).or(20).check();
if (isValid) {
  // do something
}
```

```javascript
const isValid = If.of(20).is(10).not().check();
if (isValid) {
  // do something
}
```

```javascript
const success = await If.of(20)
  .is(20)
  .onSuccess(async () => {
    return `success`;
  })
  .checkAndExecute();
// success === 'success'
```

## Match

```javascript
const result = await Match.of(3)
  .case(
    (num: number) => num % 2 === 0,
    () => 'even',
  )
  .caseDefault(() => 'odd')
  .check();
// result === 'odd';
```

## Try

```javascript
const success = await Try.of(async () => {
  await sleep(500);
  throw new Error('A new error here');
}).do();
// success === true
```

```javascript
const valueOrUndefined = await Try.of(() => 1 + 1)
  .getOrElse<number, undefined>(
    undefined
  );
// valueOrUndefined == 2
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).

```

```
