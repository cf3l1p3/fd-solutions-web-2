import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Input = forwardRef(({
    className,
    error,
    label,
    id,
    type = 'text',
    ...props
}, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                id={id}
                type={type}
                className={twMerge(
                    'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
                    error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
                    className
                )}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{error.message}</p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
