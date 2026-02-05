import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from '../components/Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'arrow'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showHome: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

// Default guide page breadcrumb
export const Default: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'AI Freelancing' },
    ],
  },
}

// With multiple levels
export const DeepNavigation: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Side Hustles', href: '/guides/side-hustles' },
      { label: 'Social Media Management' },
    ],
  },
}

// Different separators
export const SlashSeparator: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Passive Income Ideas' },
    ],
    separator: 'slash',
  },
}

export const ArrowSeparator: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Passive Income Ideas' },
    ],
    separator: 'arrow',
  },
}

// Different sizes
export const Small: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'AI Freelancing' },
    ],
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'AI Freelancing' },
    ],
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'AI Freelancing' },
    ],
    size: 'lg',
  },
}

// Without home icon
export const NoHomeIcon: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'AI Freelancing' },
    ],
    showHome: false,
  },
}

// Long breadcrumb text (truncated)
export const LongText: Story = {
  args: {
    items: [
      { label: 'Side Hustle Guides', href: '/guides' },
      { label: 'How to Build a $10K/Month Social Media Management Business with AI' },
    ],
  },
}

// Tools section
export const ToolsSection: Story = {
  args: {
    items: [
      { label: 'Tools', href: '/tools' },
      { label: 'Content Generator' },
    ],
  },
}

// Blog post
export const BlogPost: Story = {
  args: {
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'AI Side Hustle Trends 2026' },
    ],
  },
}
