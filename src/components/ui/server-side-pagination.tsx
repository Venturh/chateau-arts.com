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
		<nav className="flex items-center justify-between border-t border-zinc-300 px-4 dark:border-zinc-700 sm:px-0">
			<div className="-mt-px flex w-0 flex-1">
				{page > 1 && (
					<Link
						className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:hover:border-zinc-700 dark:hover:text-zinc-400"
						href={`/${path}?page=${page - 1}`}
					>
						<ArrowLongLeftIcon className="mr-3 h-5 w-5 text-zinc-400" aria-hidden="true" />
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
								: 'border-t-2 border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:hover:border-zinc-700 dark:hover:text-zinc-400',

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
						className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:hover:border-zinc-700 dark:hover:text-zinc-400"
						href={`/${path}?page=${page + 1}`}
					>
						{t('next')}
						<ArrowLongRightIcon className="ml-3 h-5 w-5 text-zinc-400" aria-hidden="true" />
					</Link>
				)}
			</div>
		</nav>
	)
}
