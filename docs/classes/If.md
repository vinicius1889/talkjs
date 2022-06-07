[TalkJS](../README.md) / If

# Class: If

## Table of contents

### Constructors

- [constructor](If.md#constructor)

### Methods

- [check](If.md#check)
- [is](If.md#is)
- [not](If.md#not)
- [or](If.md#or)
- [of](If.md#of)

## Constructors

### constructor

• **new If**(`currentValue`, `currentState?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currentValue` | `any` | `undefined` |
| `currentState` | `boolean` | `true` |

#### Defined in

[if/index.ts:2](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/if/index.ts#L2)

## Methods

### check

▸ **check**(): `boolean`

#### Returns

`boolean`

#### Defined in

[if/index.ts:8](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/if/index.ts#L8)

___

### is

▸ **is**(`valueToMatch?`): [`If`](If.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueToMatch?` | `any` |

#### Returns

[`If`](If.md)

#### Defined in

[if/index.ts:12](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/if/index.ts#L12)

___

### not

▸ **not**(): [`If`](If.md)

#### Returns

[`If`](If.md)

#### Defined in

[if/index.ts:40](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/if/index.ts#L40)

___

### or

▸ **or**(`valueToMatch?`): [`If`](If.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueToMatch?` | `any` |

#### Returns

[`If`](If.md)

#### Defined in

[if/index.ts:26](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/if/index.ts#L26)

___

### of

▸ `Static` **of**(`value`): [`If`](If.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`If`](If.md)

#### Defined in

[if/index.ts:4](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/if/index.ts#L4)
