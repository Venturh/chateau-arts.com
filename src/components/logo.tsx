import { Link } from 'next-intl'

export function Logo() {
	return (
		<div className="flex">
			<Link href={'/'} className="-m-1.5 p-1.5">
				<span className="font-serif uppercase text-zinc-700 dark:text-zinc-300">
					elisabeth werpers
				</span>
			</Link>
		</div>
	)
}
