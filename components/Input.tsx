'use client';

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  // Base styles
  'w-full rounded-lg bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      variant: {
        default: 'border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20',
        ghost: 'border-transparent bg-zinc-800/50 focus:bg-zinc-800 focus:border-zinc-600',
        error: 'border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

const labelVariants = cva('block text-sm font-medium mb-1.5 transition-colors duration-200', {
  variants: {
    variant: {
      default: 'text-zinc-300',
      error: 'text-red-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      size,
      variant,
      label,
      helperText,
      error,
      leadingIcon,
      trailingIcon,
      disabled,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasError = !!error;
    const effectiveVariant = hasError ? 'error' : variant;

    return (
      <div className={cn('space-y-1.5', containerClassName)}>
        {label && (
          <label
            className={cn(
              labelVariants({ variant: hasError ? 'error' : 'default' }),
              isFocused && !hasError && 'text-violet-400'
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leadingIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
              {leadingIcon}
            </div>
          )}

          <input
            type={type}
            className={cn(
              inputVariants({ size, variant: effectiveVariant }),
              leadingIcon && 'pl-10',
              trailingIcon && 'pr-10',
              className
            )}
            ref={ref}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={
              error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined
            }
            {...props}
          />

          {trailingIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
              {trailingIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p
            id={error ? `${props.id}-error` : `${props.id}-helper`}
            className={cn(
              'text-xs transition-colors duration-200',
              hasError ? 'text-red-400' : 'text-zinc-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
