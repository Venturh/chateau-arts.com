import { Link } from '@/components/link'
import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

interface Props {
	exhibition: Exhibition
}
export function ExhibitionCard({ exhibition }: Props) {
	const { slug, title } = exhibition
	return (
		<Link href={`/exhibitions/${slug}`} className="group overflow-hidden rounded" key={slug}>
			<SanityImage className="mt-1 rounded" image={exhibition.images[0]} />
			<div className="mt-4">
				<h2 className="relative z-10 text-xl  tracking-tight text-zinc-800">{title}</h2>
				<span className="relative z-10 mt-2 block text-sm text-zinc-800">
					{toDate(exhibition.from)} - {toDate(exhibition.to)}
				</span>
			</div>
		</Link>
	)
}
