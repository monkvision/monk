---
sidebar_position: 5
title: View
hide_title: true
---

:::caution

This section refers to the old versions of the MonkJs SDK (version `3.X.X` and below). For the v4 docs, please refer to
[this page](docs/introduction.md).

:::

# View

![npm latest package](https://img.shields.io/npm/v/@monkvision/corejs/latest.svg)

```yarn
yarn add @monkvision/corejs
```

```js
import monk from '@monkvision/corejs'

const { createOne, deleteOne } = monk.entity.view;
```

## createOne
`POST /inspections/${inspectionId}/views`

```javascript
await monk.view.createOne(inspectionId, data);
```

[Try it on api.monk.ai](https://api.monk.ai/v1/apidocs/#/View/post_view)

| **name**                      | **type**           | **default** |
|-------------------------------|--------------------|-------------|
| `inspectionId`                | string             |             |
| `data`                        | CreateView         |             |
| - `data.imageId`              | string             |             |
| - `data.newImage`             | CreateViewImage    |             |
| - `data.damageId`             | string             |             |
| - `data.polygons`             | number\[\]\[\]\[\] |             |
| - `data.boundingBox`          | BoundingBox        |             |

```json
{
  "axiosResponse": {},
  "entities": {
    "views": {
      "3fa85f64-5717-4562-b3fc-2c963f66afa6": {
        "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "damageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "polygons": [[[0]]],
        "boundingBox": {
          "xmin": 0,
          "ymin": 0,
          "width": 0,
          "height": 0
        },
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    }
  },
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

## deleteOne
`DELETE /inspections/${inspectionId}/views/${id}`

```javascript
await monk.view.deleteOne(id, inspectionId);
```

[Try it on api.monk.ai](https://api.monk.ai/v1/apidocs/#/View/delete_view)

| **name**             | **type** | **default** |
|----------------------|----------|-------------|
| `id`                 | string   |             |
| `inspectionId`       | string   |             |

```json
{
  "axiosResponse": {},
  "entities": {
    "views": {
      "3fa85f64-5717-4562-b3fc-2c963f66afa6": {
        "deleted": true,
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    }
  },
  "result": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```
