import type { Meta, StoryObj } from '@storybook/react'
import { ReadingProgress, ReadingProgressWithText, ReadingProgressCircle } from '@/components/ui/reading-progress'

const meta: Meta<typeof ReadingProgress> = {
  title: 'Components/ReadingProgress',
  component: ReadingProgress,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A reading progress indicator that shows how far the user has scrolled through the content.

## Features
- **Bar variant**: Simple progress bar at the top of the viewport
- **With text**: Shows percentage alongside the bar
- **Circle variant**: Floating circular indicator in the corner
- Accessible with proper ARIA attributes
- Smooth animations with passive scroll listeners

## Usage
\`\`\`tsx
import { ReadingProgress, ReadingProgressWithText, ReadingProgressCircle } from '@/components/ui/reading-progress'

// Simple bar at top
<ReadingProgress />

// With percentage text
<ReadingProgressWithText textPosition="right" />

// Circular indicator
<ReadingProgressCircle />
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        {/* Add scrollable content for demo */}
        <div className="p-8 space-y-8 pt-16">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Demo Article: Build Your AI Side Hustle
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Scroll down to see the reading progress indicator in action. The progress bar will fill as you scroll through the content.
          </p>
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Section {i + 1}: Lorem Ipsum
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ReadingProgress>

export const Default: Story = {
  args: {
    fixed: true,
    height: 'sm',
  },
}

export const MediumHeight: Story = {
  args: {
    fixed: true,
    height: 'md',
  },
}

export const LargeHeight: Story = {
  args: {
    fixed: true,
    height: 'lg',
  },
}

export const WithPercentageText: StoryObj<typeof ReadingProgressWithText> = {
  render: (args) => <ReadingProgressWithText {...args} />,
  args: {
    textPosition: 'right',
    height: 'md',
  },
}

export const TextPositionCenter: StoryObj<typeof ReadingProgressWithText> = {
  render: (args) => <ReadingProgressWithText {...args} />,
  args: {
    textPosition: 'center',
    height: 'md',
  },
}

export const CircleIndicator: StoryObj<typeof ReadingProgressCircle> = {
  render: () => <ReadingProgressCircle />,
}

export const AllVariants: Story = {
  render: () => (
    <div>
      <ReadingProgress height="sm" />
      <ReadingProgressCircle />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combining the top bar with a floating circle indicator for maximum visibility.',
      },
    },
  },
}
