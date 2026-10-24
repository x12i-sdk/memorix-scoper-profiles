# @x12i/memorix-scoper-profiles usage example

**Deprecated npm package:** Merged into @x12i/memorix-scoper@3.1.0. Import profiles from @x12i/memorix-scoper or @x12i/memorix-scoper/profiles.

This example documents the pinned historical release. Follow the replacement guidance above for new integrations.

Versioned Scoper profiles consumed by @x12i/memorix-scoper.

This consuming application demonstrates **select a bundled profile and inspect its permitted capabilities** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Select a versioned profile for a Scoper run.
- Keep a consumer pinned to a known Scoper profile set.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-scoper-profiles)
- [Implementation monorepo](https://github.com/x12i/scoper-monorepo)
- [Reviewed package source](https://github.com/x12i/scoper-monorepo/tree/1fbab09cdcf68c47f68594bd91b2145a31128f77/packages/profiles)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The records, callers, inference outputs and backend responses in these examples are synthetic. The example checks a local consumer workflow; no database, semantic model, remote promotion, or real similarity index is contacted. A generated mapping proposal still needs human review before production use.
