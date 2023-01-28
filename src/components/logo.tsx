import Link from 'next/link'

export function Logo() {
	return (
		<div className="flex">
			<Link href={'/'} className="-m-1.5 p-1.5">
				<span className="font-medium ">elisabeth werpers</span>
			</Link>
		</div>
	)
}
