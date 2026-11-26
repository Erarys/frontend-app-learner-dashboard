import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { render, screen } from '@testing-library/react';

import WidgetSidebarSlot from '.';

jest.unmock('react');
jest.unmock('@fortawesome/react-fontawesome');

jest.mock('@openedx/frontend-plugin-framework', () => ({
  PluginSlot: jest.fn(),
}));

describe('WidgetSidebar', () => {
  test('promotes the Open KazNU Telegram channel in the sidebar', () => {
    PluginSlot.mockImplementation(({ children }) => children);

    render(<WidgetSidebarSlot />);

    expect(screen.getByRole('heading', { name: 'Open KazNU в Telegram' })).toBeVisible();
    const link = screen.getByRole('link', { name: 'Присоединиться к каналу' });
    expect(link).toHaveAttribute('href', 'https://t.me/kaznuopen');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.queryByText('Looking for a new challenge?')).not.toBeInTheDocument();
  });
});
