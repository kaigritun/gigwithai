import type { Meta, StoryObj } from '@storybook/react';
import EmailSignup from '../../components/EmailSignup';

const meta: Meta<typeof EmailSignup> = {
  title: 'Components/EmailSignup',
  component: EmailSignup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    accentColor: {
      control: 'select',
      options: ['emerald', 'violet', 'blue'],
    },
    compact: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Get weekly AI hustle tips',
    description: 'Free weekly tips on making money with AI.',
    buttonText: 'Subscribe',
    accentColor: 'violet',
    compact: false,
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compact: true,
  },
};

export const EmeraldTheme: Story = {
  args: {
    ...Default.args,
    headline: 'Get job search tips',
    description: 'Weekly tips for AI-powered job hunting.',
    accentColor: 'emerald',
  },
};

export const BlueTheme: Story = {
  args: {
    ...Default.args,
    headline: 'Learn MCP',
    description: 'Tutorials and guides for MCP development.',
    accentColor: 'blue',
  },
};

export const CompactEmerald: Story = {
  args: {
    ...EmeraldTheme.args,
    compact: true,
  },
};

export const CustomCopy: Story = {
  args: {
    headline: 'Start your AI side hustle',
    description: 'Get exclusive guides on monetizing AI skills.',
    buttonText: 'Get Started Free',
    accentColor: 'violet',
    compact: false,
  },
};
