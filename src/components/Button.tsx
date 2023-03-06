import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  size?: 'base' | 'large';
};

export function Button({ variant, size='base', children, ...props }: ButtonProps) {
  const backgroundVariants = {
    primary: 'bg-green-500 hover:bg-green-600',
    secondary: 'bg-violet-500 hover:bg-violet-600',
  };

  const sizesVariants = {
    base: 'px-10 py-3 font-semibold rounded-md gap-3',
    large: 'w-[18rem] h-[7rem] font-bold text-2xl rounded-lg gap-6',
  };

  const currentBackground = backgroundVariants[variant];
  const currentSize = sizesVariants[size];


  return (
    <button type='button' className={`${currentBackground} ${currentSize} flex items-center justify-center  text-white font-head text-center transition-all`} {...props } >
      { children }
    </button>
  );
};
