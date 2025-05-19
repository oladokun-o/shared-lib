# @rondwell/shared-lib

A shared library for the Rondwell Project backend applications.

## Overview

This shared library contains common utilities, interfaces, and functionality used across the Rondwell backend ecosystem. It provides standardized implementations to ensure consistency and reduce code duplication.

## Installation

```bash
npm install @rondwell/shared-lib
```

## Usage

```typescript
// Import specific functions/classes
import { SomeUtility } from '@rondwell/shared-lib';

// Or import from specific modules
import { ValidationHelpers } from '@rondwell/shared-lib/validation';
```

## Project Structure

```
shared-lib/
├── dist/             # Compiled output
├── src/              # Source code
│   ├── errors/       # Custom error classes
│   ├── middleware/   # Middleware functions
│   ├── types/        # TypeScript types and interfaces
│   ├── utils/        # Utility functions
│   └── index.ts      # Main entry point
├── package.json
└── tsconfig.json
```

## Development

### Prerequisites

- Node.js (v20.18+)
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

### Scripts

- `npm run build` - Build the library

## TypeScript Configuration

To properly use this library with TypeScript, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "declaration": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
```

## Troubleshooting

### TypeScript Declaration Files

If you encounter TypeScript errors about missing declaration files:

1. Make sure you're using the latest version of the library
2. Check that the package is correctly installed

## Contributing

1. Create a branch from `main`
2. Make your changes
3. Submit a pull request

## License

[LICENSE TYPE] - See LICENSE file for details.
