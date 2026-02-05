import type { Meta, StoryObj } from '@storybook/react'
import TableOfContents from '../components/TableOfContents'

const meta: Meta<typeof TableOfContents> = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    collapsible: {
      control: 'boolean',
    },
    defaultCollapsed: {
      control: 'boolean',
    },
    highlightActive: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof TableOfContents>

const sampleItems = [
  { id: 'intro', text: 'Introduction', level: 2 },
  { id: 'why-ai-hustles', text: 'Why AI Side Hustles?', level: 2 },
  { id: 'getting-started', text: 'Getting Started', level: 2 },
  { id: 'choosing-niche', text: 'Choosing Your Niche', level: 3 },
  { id: 'tools-needed', text: 'Tools You Need', level: 3 },
  { id: 'hustle-ideas', text: 'Top Hustle Ideas', level: 2 },
  { id: 'content-creation', text: 'Content Creation', level: 3 },
  { id: 'freelance-writing', text: 'Freelance Writing', level: 3 },
  { id: 'social-media', text: 'Social Media Management', level: 3 },
  { id: 'scaling', text: 'Scaling Your Income', level: 2 },
  { id: 'conclusion', text: 'Conclusion', level: 2 },
]

// Default with sample items
export const Default: Story = {
  args: {
    items: sampleItems,
    title: 'On this page',
  },
}

// Short TOC
export const ShortToc: Story = {
  args: {
    items: [
      { id: 'intro', text: 'Introduction', level: 2 },
      { id: 'how-it-works', text: 'How It Works', level: 2 },
      { id: 'conclusion', text: 'Conclusion', level: 2 },
    ],
  },
}

// Flat structure (no nesting)
export const FlatStructure: Story = {
  args: {
    items: [
      { id: 'step-1', text: 'Step 1: Find Your Niche', level: 2 },
      { id: 'step-2', text: 'Step 2: Set Up Tools', level: 2 },
      { id: 'step-3', text: 'Step 3: Find First Client', level: 2 },
      { id: 'step-4', text: 'Step 4: Deliver Results', level: 2 },
      { id: 'step-5', text: 'Step 5: Scale Up', level: 2 },
    ],
  },
}

// Deep nesting
export const DeepNesting: Story = {
  args: {
    items: [
      { id: 'main-topic', text: 'Main Topic', level: 2 },
      { id: 'subtopic-1', text: 'Subtopic 1', level: 3 },
      { id: 'detail-1-1', text: 'Detail 1.1', level: 4 },
      { id: 'detail-1-2', text: 'Detail 1.2', level: 4 },
      { id: 'subtopic-2', text: 'Subtopic 2', level: 3 },
      { id: 'another-topic', text: 'Another Topic', level: 2 },
    ],
    headingLevels: ['h2', 'h3', 'h4'],
  },
}

// With custom title
export const CustomTitle: Story = {
  args: {
    items: sampleItems,
    title: 'Quick Navigation',
  },
}

// Not collapsible
export const NotCollapsible: Story = {
  args: {
    items: sampleItems,
    collapsible: false,
  },
}

// Expanded by default
export const ExpandedByDefault: Story = {
  args: {
    items: sampleItems,
    defaultCollapsed: false,
  },
}

// Without active highlight
export const NoActiveHighlight: Story = {
  args: {
    items: sampleItems,
    highlightActive: false,
  },
}

// Long text items (truncated)
export const LongTextItems: Story = {
  args: {
    items: [
      { id: 'intro', text: 'Introduction to Building a $10K/Month Side Hustle', level: 2 },
      { id: 'why', text: 'Why AI-Powered Services Are the Best Opportunity in 2026', level: 2 },
      { id: 'how', text: 'Step-by-Step Guide: How to Land Your First Client This Week', level: 2 },
      { id: 'tips', text: 'Pro Tips from Freelancers Making $50K+ Monthly with AI Tools', level: 2 },
    ],
  },
}

// Guide page context
export const GuidePageExample: Story = {
  args: {
    items: [
      { id: 'why-smm', text: 'Why Social Media Management?', level: 2 },
      { id: 'step-1', text: 'Step 1: Choose Your Tools', level: 2 },
      { id: 'buffer-setup', text: 'Setting Up Buffer', level: 3 },
      { id: 'chatgpt-prompts', text: 'ChatGPT Prompts for Content', level: 3 },
      { id: 'step-2', text: 'Step 2: Find Clients', level: 2 },
      { id: 'linkedin-outreach', text: 'LinkedIn Outreach', level: 3 },
      { id: 'local-business', text: 'Local Business Strategy', level: 3 },
      { id: 'step-3', text: 'Step 3: Deliver & Scale', level: 2 },
      { id: 'pricing', text: 'Pricing Your Services', level: 2 },
      { id: 'next-steps', text: 'Next Steps', level: 2 },
    ],
    title: 'In this guide',
  },
}
