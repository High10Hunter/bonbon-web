import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))

export type PropsWithClassName<P = unknown> = P & { className?: ClassValue }
