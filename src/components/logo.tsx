import Link from 'next/link'

export function Logo() {
	return (
		<div className="flex">
			<Link href={'/'} className="-m-1.5 p-1.5">
				<span className="font-serif uppercase text-neutral-700 dark:text-neutral-300">
					elisabeth werpers
				</span>
			</Link>
		</div>
	)
}
