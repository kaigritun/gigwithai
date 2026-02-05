import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, LoadingOverlay } from '../components/Spinner';
import { Button } from '../components/Button';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    tone: {
      control: 'select',
      options: ['default', 'primary', 'white', 'muted'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// =============================================================================
// SIZES
// =============================================================================

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

// =============================================================================
// COLORS
// =============================================================================

export const Default: Story = {
  args: {
    tone: 'default',
    size: 'lg',
  },
};

export const Primary: Story = {
  args: {
    tone: 'primary',
    size: 'lg',
  },
};

export const White: Story = {
  args: {
    tone: 'white',
    size: 'lg',
  },
};

export const Muted: Story = {
  args: {
    tone: 'muted',
    size: 'lg',
  },
};

// =============================================================================
// ALL SIZES COMPARISON
// =============================================================================

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" tone="primary" />
        <span className="text-xs text-zinc-500">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" tone="primary" />
        <span className="text-xs text-zinc-500">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" tone="primary" />
        <span className="text-xs text-zinc-500">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" tone="primary" />
        <span className="text-xs text-zinc-500">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" tone="primary" />
        <span className="text-xs text-zinc-500">xl</span>
      </div>
    </div>
  ),
};

// =============================================================================
// USE CASES
// =============================================================================

export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-zinc-300">
      <Spinner size="sm" tone="primary" />
      <span>Finding AI gigs...</span>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button isLoading>
      Submitting...
    </Button>
  ),
};

export const CenteredPage: Story = {
  render: () => (
    <div className="flex min-h-[200px] w-[400px] items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="xl" tone="primary" />
        <p className="text-sm text-zinc-400">Loading opportunities...</p>
      </div>
    </div>
  ),
};

// =============================================================================
// LOADING OVERLAY
// =============================================================================

export const Overlay: Story = {
  render: () => (
    <LoadingOverlay isLoading label="Processing...">
      <div className="h-48 w-80 rounded-lg bg-zinc-800 p-4">
        <h3 className="text-lg font-medium text-zinc-100">Gig Details</h3>
        <p className="mt-2 text-sm text-zinc-400">
          This content is covered by a loading overlay.
        </p>
      </div>
    </LoadingOverlay>
  ),
};

export const OverlayNotLoading: Story = {
  render: () => (
    <LoadingOverlay isLoading={false}>
      <div className="h-48 w-80 rounded-lg bg-zinc-800 p-4">
        <h3 className="text-lg font-medium text-zinc-100">Gig Details</h3>
        <p className="mt-2 text-sm text-zinc-400">
          This content is visible when not loading.
        </p>
      </div>
    </LoadingOverlay>
  ),
};
