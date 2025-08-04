import '@testing-library/jest-dom';

import { vi } from 'vitest';

vi.mock('react-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => {
    children;
  },
}));
