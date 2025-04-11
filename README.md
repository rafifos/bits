# Rafifos's Bits and Bytes

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![jsrepo Blocks](https://jsrepo.dev/badges/registry/blocks?url=github/rafifos/bits)](https://jsrepo.dev/registry?url=github/rafifos/bits)
[![jsrepo Categories](https://jsrepo.dev/badges/registry/categories?url=github/rafifos/bits)](https://jsrepo.dev/registry?url=github/rafifos/bits)
[![jsrepo Dependencies](https://jsrepo.dev/badges/registry/dependencies?url=github/rafifos/bits)](https://jsrepo.dev/registry?url=github/rafifos/bits)

A collection of reusable TypeScript utility functions and helpers that are too small to be their own libraries.

## Overview

This repository contains small, focused utility functions that can be easily imported into your projects using [jsrepo](https://jsrepo.dev). Each utility is thoroughly tested and follows modern TypeScript best practices.

## Installation

This library is distributed via jsrepo, which allows you to import just the specific utilities you need without any additional dependencies.

1. Setup jsrepo if you haven't already:

```bash
npx jsrepo init --project
```

2. Use any utility directly in your project:

```bash
npx jsrepo add github/rafifos/bits/utils/handle-async
```

## Available Utilities

- [handle-async](src/utils/handle-async.ts): A utility for handling async functions with proper error handling.
- [should-never-happen](src/utils//should-never-happen.ts): A utility for handling cases that should never occur in your application flow.

## Development

### Prerequisites

- Node.js ≥ 22
- pnpm ≥ 10

### Setup

1. Clone the repository:

```bash
git clone https://github.com/rafifos/bits.git
cd bits
```

2. Install dependencies:

```bash
pnpm install
```

### Commands

- `pnpm build` - Builds the jsrepo registry
- `pnpm test` - Runs tests with Jest
- `pnpm lint` - Runs Biome linter and formatter

### Adding a New Utility

1. Create a new file in the appropriate category directory (e.g., `src/utils/my-utility.ts`)
2. Add tests in a corresponding `my-utility.test.ts` file
3. Run `pnpm build` to update the jsrepo manifest
4. Run `pnpm test` to ensure everything works correctly

### Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages, enforced by commitlint.

Examples:

- `feat: add new handle-error utility`
- `fix: correct type definition in handle-async`
- `docs: update usage examples`
- `test: add more test cases for should-never-happen`

## CI/CD

This project uses GitHub Actions for continuous integration:

- Code quality checks with Biome
- Unit tests with Jest
- Commit message validation with commitlint
- Automatic jsrepo manifest updates

## License

MIT License - see the [LICENSE](LICENSE) file for details.
