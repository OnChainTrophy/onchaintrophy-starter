import {
  Plus_Jakarta_Sans as FontSans,
  Red_Hat_Display as FontRedHatDisplay,
  Red_Hat_Text as FontRedHatText,
  Red_Hat_Mono as FontRedHatMono,
  DM_Sans as FontDMSans,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const fontDMSans400 = FontDMSans({
  subsets: ['latin'],
  variable: '--font-dm-sans-400',
  weight: '400',
});

export const fontDMSans500 = FontDMSans({
  subsets: ['latin'],
  variable: '--font-dm-sans-500',
  weight: '500',
});

export const fontDMSans700 = FontDMSans({
  subsets: ['latin'],
  variable: '--font-dm-sans-700',
  weight: '700',
});
export const fontRedHatDisplay = FontRedHatDisplay({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
});
export const fontRedHatText = FontRedHatText({
  subsets: ['latin'],
  variable: '--font-red-hat-text',
});
export const fontRedHatMono = FontRedHatMono({
  subsets: ['latin'],
  variable: '--font-red-hat-mono',
});
