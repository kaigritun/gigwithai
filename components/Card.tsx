'use client';

import { HTMLAttributes, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from './Badge';

// =============================================================================
// BASE CARD
// =============================================================================

const cardVariants = cva(
  'rounded-xl transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 border border-zinc-800',
        elevated: 'bg-zinc-900 border border-zinc-800 shadow-lg',
        ghost: 'bg-transparent',
        interactive: 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 cursor-pointer',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// =============================================================================
// CARD HEADER
// =============================================================================

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5', className)}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

// =============================================================================
// CARD TITLE
// =============================================================================

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold text-zinc-100', className)}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

// =============================================================================
// CARD DESCRIPTION
// =============================================================================

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-zinc-400', className)}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

// =============================================================================
// CARD CONTENT
// =============================================================================

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

// =============================================================================
// CARD FOOTER
// =============================================================================

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

// =============================================================================
// ARTICLE CARD (Pre-composed)
// =============================================================================

export interface ArticleCardProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  description?: string;
  category?: string;
  readingTime?: string;
  date?: string;
  image?: string;
}

const ArticleCard = forwardRef<HTMLAnchorElement, ArticleCardProps>(
  ({ className, href, title, description, category, readingTime, date, image, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          'group block rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden',
          'transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800/50',
          className
        )}
        {...props}
      >
        {image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            {category && <Badge variant="primary" size="sm">{category}</Badge>}
            {readingTime && <span className="text-xs text-zinc-500">{readingTime}</span>}
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-violet-400 transition-colors line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{description}</p>
          )}
          {date && (
            <p className="mt-3 text-xs text-zinc-500">{date}</p>
          )}
        </div>
      </Link>
    );
  }
);

ArticleCard.displayName = 'ArticleCard';

// =============================================================================
// FEATURE CARD (Pre-composed)
// =============================================================================

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group rounded-xl bg-zinc-900 border border-zinc-800 p-6',
          'transition-all duration-200 hover:border-violet-500/30 hover:bg-zinc-800/50',
          className
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{description}</p>
      </div>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ArticleCard,
  FeatureCard,
  cardVariants,
};
