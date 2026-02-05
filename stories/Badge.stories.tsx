import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dot: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// =============================================================================
// VARIANTS
// =============================================================================

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Featured',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Pending',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Failed',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Beta',
    variant: 'info',
  },
};

export const Outline: Story = {
  args: {
    children: 'Draft',
    variant: 'outline',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    variant: 'primary',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    variant: 'primary',
  },
};

// =============================================================================
// WITH DOT
// =============================================================================

export const WithDot: Story = {
  args: {
    children: 'Active',
    dot: true,
    variant: 'success',
  },
};

export const StatusDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="error" dot>Paused</Badge>
      <Badge variant="primary" dot>Featured</Badge>
    </div>
  ),
};

// =============================================================================
// USE CASES
// =============================================================================

export const GigCategories: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">AI Writing</Badge>
      <Badge variant="default">Remote</Badge>
      <Badge variant="secondary">Part-time</Badge>
      <Badge variant="info">Trending</Badge>
    </div>
  ),
};

export const EarningPotential: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400 w-28">AI Content:</span>
        <Badge variant="success">$50-200/hr</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400 w-28">Data Analysis:</span>
        <Badge variant="primary">$75-150/hr</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400 w-28">Consulting:</span>
        <Badge variant="warning">$100-300/hr</Badge>
      </div>
    </div>
  ),
};
