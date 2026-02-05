import type { Meta, StoryObj } from '@storybook/react'
import ShareButtons, { ShareButtonsInline, ShareButtonsFloating } from '../components/ShareButtons'

const meta: Meta<typeof ShareButtons> = {
  title: 'Components/ShareButtons',
  component: ShareButtons,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabels: {
      control: 'boolean',
    },
    platforms: {
      control: 'check',
      options: ['twitter', 'linkedin', 'facebook', 'email', 'copy'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ShareButtons>

// Default
export const Default: Story = {
  args: {
    title: 'How to Build a $10K/Month AI Side Hustle',
    description: 'Learn to build a profitable side hustle using AI tools.',
    url: 'https://gigwithai.com/guides/social-media-management-side-hustle',
  },
}

// Horizontal layout (default)
export const Horizontal: Story = {
  args: {
    title: 'AI Freelancing Guide',
    direction: 'horizontal',
  },
}

// Vertical layout
export const Vertical: Story = {
  args: {
    title: 'AI Freelancing Guide',
    direction: 'vertical',
  },
}

// With labels
export const WithLabels: Story = {
  args: {
    title: 'ChatGPT Freelancing Tips',
    showLabels: true,
  },
}

// Small size
export const Small: Story = {
  args: {
    title: 'Quick Share',
    size: 'sm',
  },
}

// Large size
export const Large: Story = {
  args: {
    title: 'Big Share Buttons',
    size: 'lg',
  },
}

// Limited platforms
export const LimitedPlatforms: Story = {
  args: {
    title: 'LinkedIn and Copy only',
    platforms: ['linkedin', 'copy'],
  },
}

// Twitter and LinkedIn only
export const SocialOnly: Story = {
  args: {
    title: 'Social Media Only',
    platforms: ['twitter', 'linkedin', 'facebook'],
  },
}

// Just copy button
export const CopyOnly: Story = {
  args: {
    title: 'Copy Link Example',
    platforms: ['copy'],
    showLabels: true,
  },
}

// Inline variant with label
export const Inline: StoryObj<typeof ShareButtonsInline> = {
  render: (args) => <ShareButtonsInline {...args} />,
  args: {
    title: 'How to Use AI for Freelancing',
    label: 'Share this guide',
  },
}

// Inline with custom label
export const InlineCustomLabel: StoryObj<typeof ShareButtonsInline> = {
  render: (args) => <ShareButtonsInline {...args} />,
  args: {
    title: 'Side Hustle Tips 2026',
    label: 'Found this helpful? Share it!',
  },
}

// Vertical with labels
export const VerticalWithLabels: Story = {
  args: {
    title: 'Full Featured Share',
    direction: 'vertical',
    showLabels: true,
    size: 'md',
  },
}

// All platforms small
export const CompactAll: Story = {
  args: {
    title: 'Compact Share Bar',
    size: 'sm',
    platforms: ['twitter', 'linkedin', 'facebook', 'email', 'copy'],
  },
}

// Guide page example
export const GuidePageContext: Story = {
  args: {
    title: 'Social Media Management Side Hustle with AI (2026 Guide)',
    description: 'Start a profitable social media management business using AI tools. Step-by-step guide to earning $3-5K/month.',
    url: 'https://gigwithai.com/guides/social-media-management-side-hustle',
    platforms: ['twitter', 'linkedin', 'copy'],
  },
}
