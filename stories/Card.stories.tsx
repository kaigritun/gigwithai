import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ArticleCard,
  FeatureCard,
} from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'ghost', 'interactive'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// =============================================================================
// BASE CARD
// =============================================================================

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          This is the main content area of the card.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" className="w-80">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With shadow for depth.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          This card has additional shadow for visual hierarchy.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="interactive" className="w-80">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover to see the effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          This card responds to hover interactions.
        </p>
      </CardContent>
    </Card>
  ),
};

// =============================================================================
// ARTICLE CARD
// =============================================================================

export const Article: Story = {
  render: () => (
    <ArticleCard
      href="#"
      title="10 AI Side Hustles That Actually Make Money in 2026"
      description="Discover profitable AI gigs you can start this weekend with zero upfront investment."
      category="Gig Ideas"
      readingTime="7 min read"
      date="Feb 4, 2026"
      className="w-80"
    />
  ),
};

export const ArticleWithImage: Story = {
  render: () => (
    <ArticleCard
      href="#"
      title="How I Made $5,000/Month With AI Content Services"
      description="A step-by-step breakdown of building a profitable AI writing business from scratch."
      category="Case Study"
      readingTime="10 min read"
      date="Feb 3, 2026"
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop"
      className="w-80"
    />
  ),
};

export const ArticleGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        href="#"
        title="AI Content Writing Gigs"
        description="How to find and land high-paying AI content writing clients."
        category="Writing"
        readingTime="6 min"
      />
      <ArticleCard
        href="#"
        title="AI Video Production"
        description="Turn AI-generated content into profitable video services."
        category="Video"
        readingTime="8 min"
      />
      <ArticleCard
        href="#"
        title="AI Consulting for SMBs"
        description="Help small businesses implement AI and charge premium rates."
        category="Consulting"
        readingTime="5 min"
      />
    </div>
  ),
};

// =============================================================================
// FEATURE CARD
// =============================================================================

const DollarIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const Feature: Story = {
  render: () => (
    <FeatureCard
      icon={<DollarIcon />}
      title="Passive Income Potential"
      description="Build AI-powered products once and earn recurring revenue while you sleep."
      className="w-80"
    />
  ),
};

export const FeatureGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-3">
      <FeatureCard
        icon={<DollarIcon />}
        title="High Earning Potential"
        description="AI services command premium rates. Start earning $50-200/hr with the right skills."
      />
      <FeatureCard
        icon={<ClockIcon />}
        title="Flexible Schedule"
        description="Work when you want, where you want. Most AI gigs are 100% remote."
      />
      <FeatureCard
        icon={<TrendingIcon />}
        title="Growing Demand"
        description="AI skills are in massive demand. Get in early while rates are high."
      />
    </div>
  ),
};

// =============================================================================
// COMPLEX EXAMPLES
// =============================================================================

export const GigOpportunityCard: Story = {
  render: () => (
    <Card variant="interactive" className="w-96">
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100">AI Content Writer</h3>
            <p className="text-sm text-zinc-400">Remote • Flexible Hours</p>
          </div>
          <Badge variant="success" dot>Active</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary" size="sm">ChatGPT</Badge>
          <Badge variant="secondary" size="sm">Claude</Badge>
          <Badge variant="secondary" size="sm">SEO</Badge>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-violet-400 font-medium">$75-150/hr</span>
          <span className="text-zinc-500">5-10 hrs/week</span>
        </div>
      </CardContent>
    </Card>
  ),
};
