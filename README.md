# Thrift-Co

Thrift Co is an e-commerce website that sells used and well maintained clothes for an affordable price.

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

## Test using Vitest

Setup requirements:

- Vitest - test framework like Jest but designed for Vite
- @testing-library/jest-dom - run test in virtual dom
- @testing-library/react - test library for react
- jsdom

Note: testSetup.ts under lib folder are settings set before running each test. All common imports and test requirements should be placed here.

How to run test: `npm run test`

Concepts in creating unit tests for react components: <br/>

1. Check if components render with or without props.
2. Check if components render when state changes.
3. Check how component changes with user interaction.
