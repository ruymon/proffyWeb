import { InputHTMLAttributes, useRef, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {};

export function Input({ placeholder, ...props }: InputProps) {
  const [ isFocused, setIsFocused ] = useState(false);
  const inputRef = useRef(null);

  const placeholderStyleVariants = {
    true: 'text-slate-400 text-xs top-3',
    false: 'text-slate-500 top-1/2 transform -translate-y-1/2',
  };

  return (
    <div
      className={`w-full border group first:rounded-t-lg last:rounded-b-lg border-slate-200 bg-white relative before:content-[''] before:bg-violet-500 before:bg-opacity-0 ${isFocused && 'before:bg-opacity-100'} transition-all before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2/3 before:w-[0.125rem]  before:rounded-full before:z-10`}
    >
      <span className={`absolute pl-6 ${ inputRef.current?.value ? placeholderStyleVariants[true] : placeholderStyleVariants[isFocused.toString()] }`}>{ placeholder }</span>

      <input 
        className="px-6 py-5 text-slate-600 focus:outline-none border-none bg-transparent w-full translate-y-2"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        {...props} 
      />
    </div>
  );
};
