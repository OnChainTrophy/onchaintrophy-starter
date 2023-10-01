import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractSubstring(
  inputString: string,
  countFirstChars: number,
  countLastChars: number
): string {
  if (inputString.length >= countFirstChars + countLastChars + 1) {
    const firstChars = inputString.slice(0, countFirstChars);
    const lastChars = inputString.slice(-countLastChars);
    return `${firstChars}...${lastChars}`;
  }
  return inputString;
}
