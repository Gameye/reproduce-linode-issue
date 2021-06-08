# Linode Compilation Bug

Run `npm install` to get:

```
node_modules/@linode/api-v4/lib/support/types.d.ts:1:24 - error TS2307: Cannot find module 'src/account/types' or its corresponding type declarations.

1 import { Entity } from 'src/account/types';
```