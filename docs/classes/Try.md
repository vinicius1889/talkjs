[TalkJS](../README.md) / Try

# Class: Try

## Table of contents

### Constructors

- [constructor](Try.md#constructor)

### Methods

- [do](Try.md#do)
- [getOrElse](Try.md#getorelse)
- [of](Try.md#of)

## Constructors

### constructor

• `Private` **new Try**(`evaluate`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `evaluate` | `Function` |

#### Defined in

[try/index.ts:3](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/try/index.ts#L3)

## Methods

### do

▸ **do**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[try/index.ts:9](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/try/index.ts#L9)

___

### getOrElse

▸ **getOrElse**<`T`, `U`\>(`defaultValue`): `Promise`<`T` \| `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | `U` |

#### Returns

`Promise`<`T` \| `U`\>

#### Defined in

[try/index.ts:19](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/try/index.ts#L19)

___

### of

▸ `Static` **of**(`evaluate`): [`Try`](Try.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `evaluate` | `Function` |

#### Returns

[`Try`](Try.md)

#### Defined in

[try/index.ts:5](https://github.com/vinicius1889/talkjs/blob/1bfe5b8/src/try/index.ts#L5)
