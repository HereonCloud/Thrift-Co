import { expect, test } from 'vitest';
import NavMenu from '../NavigationMenu';
import { render, screen } from '@testing-library/react';

test("Navigation menu to render selections", () => {
    render(<NavMenu />)
    expect(screen.getByText('Shop')).toBeInTheDocument()
})