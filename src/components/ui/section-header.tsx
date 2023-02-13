interface Props {
	title: string
	description?: string
}

export function SectionHeader({ title, description }: Props) {
	return (
		<div>
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-50">{title}</h1>
			{description && (
				<p className="mt-2 max-w-xl text-gray-700 dark:text-zinc-200">{description}</p>
			)}
		</div>
	)
}
