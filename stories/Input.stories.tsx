import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// =============================================================================
// STATES
// =============================================================================

export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
    type: 'email',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    id: 'email-labeled',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone else.",
    type: 'email',
    id: 'email-helper',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
    defaultValue: 'invalid-email',
    type: 'email',
    id: 'email-error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    disabled: true,
    defaultValue: 'disabled@example.com',
    type: 'email',
  },
};

// =============================================================================
// VARIANTS
// =============================================================================

export const GhostVariant: Story = {
  args: {
    variant: 'ghost',
    placeholder: 'Search...',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input...',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input (default)...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input...',
  },
};

// =============================================================================
// WITH ICONS
// =============================================================================

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <SearchIcon />,
    placeholder: 'Search...',
  },
};

export const WithTrailingIcon: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    trailingIcon: <EyeIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Email',
    leadingIcon: <MailIcon />,
    placeholder: 'you@example.com',
    type: 'email',
  },
};

// =============================================================================
// FORM EXAMPLE
// =============================================================================

export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        label="Full Name"
        placeholder="John Doe"
        id="name"
      />
      <Input
        label="Email Address"
        placeholder="you@example.com"
        type="email"
        helperText="We'll send your login details here."
        id="email"
        leadingIcon={<MailIcon />}
      />
      <Input
        label="Password"
        placeholder="••••••••"
        type="password"
        helperText="Must be at least 8 characters."
        id="password"
        trailingIcon={<EyeIcon />}
      />
    </div>
  ),
};
