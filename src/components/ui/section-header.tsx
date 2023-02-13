interface Props {
	title: string
	description?: string
}

export function SectionHeader({ title, description }: Props) {
	return (
		<div>
			<h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
				{title}
			</h1>
			{description && (
				<p className="mt-2 max-w-xl text-neutral-700 dark:text-neutral-200">{description}</p>
			)}
		</div>
	)
}
