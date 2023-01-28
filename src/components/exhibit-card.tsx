import { Exhibit } from '@/lib/sanity.queries'
import { Link } from './link'

export function ExhibitCard(exhibit: Exhibit) {
	return (
		<Link href={`/exhibits/${exhibit.slug}`}>
			<h1>{exhibit.title}</h1>
			<div>{exhibit.artist}</div>
			<div>{exhibit.year}</div>
			{exhibit.sold && <div>Verkauft</div>}
		</Link>
	)
}
