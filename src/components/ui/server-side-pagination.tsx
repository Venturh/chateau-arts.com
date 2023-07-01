import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Link, useTranslations } from 'next-intl'

interface Props {
	total: number
	perPage: number
	page: number
	path: string
}

export default function ServerSidePagination({ total, perPage, page, path }: Props) {
	const t = useTranslations()
	return (
		<nav className="flex items-center justify-between border-t border-neutral-300 px-4 dark:border-neutral-700 sm:px-0">
			<div className="-mt-px flex w-0 flex-1">
				{page > 1 && (
					<Link
						className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:hover:border-neutral-700 dark:hover:text-neutral-400"
						href={`/${path}?page=${page - 1}`}
					>
						<ArrowLongLeftIcon className="mr-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
						{t('previous')}
					</Link>
				)}
			</div>
			<div className="hidden md:-mt-px md:flex">
				{Array.from({ length: Math.ceil(total / perPage) }, (_, i) => (
					<Link
						key={i}
						className={clsx(
							i + 1 === page
								? 'border-amber-500 text-amber-600'
								: 'border-t-2 border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:hover:border-neutral-700 dark:hover:text-neutral-400',

							'inline-flex items-center border-t-2  px-4 pt-4 text-sm font-medium'
						)}
						href={`/${path}?page=${i + 1}`}
					>
						{i + 1}
					</Link>
				))}
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				{page < Math.ceil(total / perPage) && (
					<Link
						className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:hover:border-neutral-700 dark:hover:text-neutral-400"
						href={`/${path}?page=${page + 1}`}
					>
						{t('next')}
						<ArrowLongRightIcon className="ml-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
					</Link>
				)}
			</div>
		</nav>
	)
}
