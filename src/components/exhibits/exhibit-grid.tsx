import { ExhibitCard } from '@/components/exhibits/exhibit-card'
import { SectionHeader } from '@/components/ui/section-header'
import { Exhibit } from '@/lib/sanity.queries'
import { cn } from '@/lib/utils'

interface Props {
	exhibits: Exhibit[]
	title?: string
}

export function ExhibitGrid({ title, exhibits }: Props) {
	return (
		<div>
			{title && <SectionHeader title={title} />}
			<div
				className={cn('grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4', { 'mt-6': title })}
			>
				{exhibits.map((exhibit) => (
					<ExhibitCard key={exhibit._id} {...exhibit} />
				))}
			</div>
		</div>
	)
}
