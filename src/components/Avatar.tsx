import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {};

export function Avatar({ ...props }: AvatarProps) {
  return (
    <img
      className="w-10 h-10 rounded-full"
      {...props}
    />
  );
};
