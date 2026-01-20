import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Textarea = forwardRef(({
    className,
    error,
    label,
    id,
    rows = 4,
    ...props
}, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
                    {label}
                </label>
            )}
            <textarea
                ref={ref}
                id={id}
                rows={rows}
                className={twMerge(
                    'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none',
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

Textarea.displayName = 'Textarea';

export default Textarea;
