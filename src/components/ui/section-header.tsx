interface Props {
	title: string
	description?: string
}

export function SectionHeader({ title, description }: Props) {
	return (
		<div className="">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
			{description && <p className="mt-2 max-w-xl  text-gray-700">{description}</p>}
		</div>
	)
}
