import { ExhibitCard } from '@/components/exhibit-card'
import { SectionHeader } from '@/components/ui/section-header'
import { Exhibit } from '@/lib/sanity.queries'

interface Props {
	exhibits: Exhibit[]
	title: string
	description: string
}

export function ExhibitGrid({ title, description, exhibits }: Props) {
	return (
		<div>
			<SectionHeader title={title} description={description} />
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
				{exhibits.map((exhibit) => (
					<ExhibitCard key={exhibit._id} {...exhibit} />
				))}
			</div>
		</div>
	)
}
