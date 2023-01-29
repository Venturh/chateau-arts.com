import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function toCurrency(value: number) {
	return value.toLocaleString(undefined, {
		style: 'currency',
		currency: 'EUR',
	})
}

export function toDate(value: string) {
	return new Date(value).toLocaleDateString('de', {
		year: '2-digit',
		month: 'long',
		day: '2-digit',
	})
}
