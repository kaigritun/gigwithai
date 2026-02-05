import type { Meta, StoryObj } from '@storybook/react';
import RelatedGuides from '../../components/RelatedGuides';

const meta: Meta<typeof RelatedGuides> = {
  title: 'Components/RelatedGuides',
  component: RelatedGuides,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleGuides = [
  {
    slug: 'chatgpt-freelancing-tips',
    title: 'ChatGPT Freelancing Tips',
    description: 'Use AI to boost your freelance productivity.',
  },
  {
    slug: 'ai-side-hustle-ideas',
    title: 'AI Side Hustle Ideas',
    description: '10 ways to make money with AI in 2026.',
  },
  {
    slug: 'social-media-management-side-hustle',
    title: 'Social Media Management',
    description: 'Start an AI-powered social media agency.',
  },
];

export const Default: Story = {
  args: {
    guides: sampleGuides,
  },
};

export const TwoGuides: Story = {
  args: {
    guides: sampleGuides.slice(0, 2),
  },
};

export const SingleGuide: Story = {
  args: {
    guides: [sampleGuides[0]],
  },
};
