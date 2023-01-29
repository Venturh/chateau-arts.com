import { Link } from '@/components/link'
import { SainityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

interface Props {
	exhibition: Exhibition
}
export function ExhibitionCard({ exhibition }: Props) {
	const { slug, title } = exhibition
	return (
		<Link href={`/exhibitions/${slug}`} className="group overflow-hidden rounded" key={slug}>
			<SainityImage
				ratio={3 / 4}
				className="mt-1 rounded transition-transform duration-300 group-hover:scale-150"
				image={exhibition.mainImage}
				alt={title}
			/>
			<div className="mt-4">
				<h2 className="relative z-10 text-xl  tracking-tight text-zinc-800">{title}</h2>
				<span className="relative z-10 mt-2 block text-sm text-zinc-800">
					{toDate(exhibition.from)} - {toDate(exhibition.to)}
				</span>
			</div>
		</Link>
	)
}
