import { Url } from 'next/dist/shared/lib/router/router'

import { cn } from '@/lib/utils'
import { Link } from '../link'

export interface Breadcrumb {
	name: string
	href?: string
}

interface Props {
	breadcrumbs: Breadcrumb[]
}

export function Breadcrumbs({ breadcrumbs }: Props) {
	return (
		<nav aria-label="breadcrumbs" className="pb-4">
			<ol role="list" className="flex items-center space-x-2">
				{breadcrumbs.map(({ name, href }, idx) => {
					const Tag = idx === breadcrumbs.length - 1 ? 'span' : Link
					return (
						<li key={name}>
							<div className="flex items-center">
								<Tag
									href={href as Url}
									className={cn('mr-4 text-sm font-medium text-neutral-900 dark:text-neutral-100', {
										underline: href,
									})}
								>
									{name}
								</Tag>
								{idx < breadcrumbs.length - 1 && (
									<svg
										viewBox="0 0 6 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="h-5 w-auto text-neutral-300"
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
