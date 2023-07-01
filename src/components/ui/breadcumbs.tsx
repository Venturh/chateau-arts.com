import { Url } from 'next/dist/shared/lib/router/router'
import { Link, useLocale } from 'next-intl'

import { cn } from '@/lib/utils'

export interface Breadcrumb {
	name: string
	href?: string
}

interface Props {
	breadcrumbs: Breadcrumb[]
}

export function Breadcrumbs({ breadcrumbs }: Props) {
	const locale = useLocale()
	return (
		<nav aria-label="breadcrumbs" className="pb-4">
			<ol role="list" className="flex items-center space-x-2 overflow-hidden">
				{breadcrumbs.map(({ name, href }, idx) => {
					const Tag = idx === breadcrumbs.length - 1 ? 'p' : Link
					return (
						<li key={name}>
							<div className="flex items-center">
								<Tag
									locale={locale}
									href={href as Url}
									className={cn(
										'mr-3 truncate text-sm font-medium text-zinc-900 dark:text-zinc-100',
										{
											underline: href,
										}
									)}
								>
									{name}
								</Tag>
								{idx < breadcrumbs.length - 1 && (
									<svg
										viewBox="0 0 6 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="h-5 w-auto text-zinc-300"
									>
										<path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
									</svg>
								)}
							</div>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
