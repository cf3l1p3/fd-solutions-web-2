import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    as: Component = 'button',
    children,
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30',
        secondary: 'bg-secondary text-white hover:bg-slate-700 shadow-md',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5',
        ghost: 'text-secondary hover:bg-slate-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <Component
            ref={ref}
            className={twMerge(
                'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
});

Button.displayName = 'Button';

export default Button;
