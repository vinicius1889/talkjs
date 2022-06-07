[TalkJS](../README.md) / Match

# Class: Match

## Table of contents

### Constructors

- [constructor](Match.md#constructor)

### Methods

- [case](Match.md#case)
- [caseDefault](Match.md#casedefault)
- [check](Match.md#check)
- [of](Match.md#of)

## Constructors

### constructor

• **new Match**(`currentValue`, `valuesToMatch?`, `functionsToExecute?`, `defaultFunction?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currentValue` | `any` | `undefined` |
| `valuesToMatch` | `any`[] | `[]` |
| `functionsToExecute` | `Function`[] | `[]` |
| `defaultFunction?` | `Function` | `undefined` |

#### Defined in

[match/index.ts:3](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/match/index.ts#L3)

## Methods

### case

▸ **case**(`value`, `functionToExecute`): [`Match`](Match.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `functionToExecute` | `Function` |

#### Returns

[`Match`](Match.md)

#### Defined in

[match/index.ts:14](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/match/index.ts#L14)

___

### caseDefault

▸ **caseDefault**(`defaultFunction`): [`Match`](Match.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultFunction` | `Function` |

#### Returns

[`Match`](Match.md)

#### Defined in

[match/index.ts:23](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/match/index.ts#L23)

___

### check

▸ **check**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[match/index.ts:32](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/match/index.ts#L32)

___

### of

▸ `Static` **of**(`currentValue`): [`Match`](Match.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentValue` | `any` |

#### Returns

[`Match`](Match.md)

#### Defined in

[match/index.ts:10](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/match/index.ts#L10)
