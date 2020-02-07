// Type definitions for @allquire/core
// Project: AllQuire <https://allquire.github.io>
// Definitions by: Il Harper <afanyiyu@hotmail.com>

// Note that ES6 modules cannot directly export class objects.
// This file should be imported using the CommonJS-style:
//   import x = require('@allquire/core');
//
// Alternatively, if --allowSyntheticDefaultImports or
// --esModuleInterop is turned on, this file can also be
// imported as a default import:
//   import x from '@allquire/core';
//
// Refer to the TypeScript documentation at
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// to understand common workarounds for this limitation of ES6 modules.

/* eslint-disable
@typescript-eslint/no-use-before-define,
@typescript-eslint/no-explicit-any,
node/no-unsupported-features/es-syntax
 */

export as namespace allquire;

export = allquire;

declare function allquire(id: string): Promise<NodeRequire>;

declare namespace allquire {}
