---
sidebar_position: 1
title: Damage
hide_title: true
---

:::caution

This section refers to the old versions of the MonkJs SDK (version `3.X.X` and below). For the v4 docs, please refer to
[this page](docs/introduction.md).

:::

# Damage

![npm latest package](https://img.shields.io/npm/v/@monkvision/corejs/latest.svg)

```yarn
yarn add @monkvision/corejs
```

```js
import monk from '@monkvision/corejs'

const { createOne, deleteOne } = monk.entity.damage;
```

## createOne
`POST /inspections/${inspectionId}/damages`

Add damage to an inspection.

```javascript
await monk.entity.damage.createOne(inspectionId, data);
```

[Try it on api.monk.ai documentation](https://api.monk.ai/v1/apidocs/#/Damage/post_damage)

| **name**            | **type**                  | **default** |
|---------------------|---------------------------|-------------|
| `inspectionId`      | string                    |             |
| `data`              | CreateDamage              |             |
| - `data.damageType` | [DamageType](#damagetype) |             |
| - `data.partType`   | PartType                  |             |


```json
{
  "axiosResponse": {},
  "entities": {
    "damages": {
      "3fa85f64-5717-4562-b3fc-2c963f66afa6": {
        "damageType": "body_crack",
        "partType": "ignore",
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "parts": []
      }
    }
  },
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## deleteOne
`DELETE /inspections/${inspectionId}/damages/${id}`

Remove damage from an inspection.

```javascript
await monk.entity.damage.deleteOne(id, inspectionId);
```

[Try it on api.monk.ai documentation](https://api.monk.ai/v1/apidocs/#/Damage/delete_damage)

| **name**             | **type** | **default** |
|----------------------|----------|-------------|
| `inspectionId`       | string   |             |
| `id`                 | string   |             |

```json
{
  "axiosResponse": {},
  "entities": {
    "damages": {
      "3fa85f64-5717-4562-b3fc-2c963f66afa6": {
        "deleted": true,
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "parts": []
      }
    }
  },
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## Enums
### DamageType
`string`
```ts
enum DamageType {
  BODY_CRACK = 'body_crack',
  BROKEN_GLASS = 'broken_glass',
  BROKEN_LIGHT = 'broken_light',
  DENT = 'dent',
  DIRT = 'dirt',
  HUBCAP_SCRATCH = 'hubcap_scratch',
  MISSHAPE = 'misshape',
  MISSING_HUBCAP = 'missing_hubcap',
  MISSING_PIECE = 'missing_piece',
  PAINT_PEELING = 'paint_peeling',
  RUSTINESS = 'rustiness',
  SCATTERED_SCRATCHES = 'scattered_scratches',
  SCRATCH = 'scratch',
  SMASH = 'smash',
  LIGHT_REFLECTION = 'light_reflection',
  SHADOW = 'shadow',
  CAR_CURVE = 'car_curve',
}
```
