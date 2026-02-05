import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive', 'outline', 'link'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// VARIANTS
// =============================================================================

export const Primary: Story = {
  args: {
    children: 'Start Earning',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Account',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'View Details',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    children: 'Read more →',
    variant: 'link',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const IconButton: Story = {
  args: {
    children: '→',
    size: 'icon',
    variant: 'outline',
  },
};

// =============================================================================
// STATES
// =============================================================================

export const Loading: Story = {
  args: {
    children: 'Submit',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

// =============================================================================
// EXAMPLES
// =============================================================================

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const CTAExample: Story = {
  name: 'CTA Example',
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" size="lg">
        Get Weekly AI Tips
      </Button>
      <Button variant="outline" size="lg">
        View Guides
      </Button>
    </div>
  ),
};
