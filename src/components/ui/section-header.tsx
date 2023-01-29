interface Props {
	title: string
	description: string
}

export function SectionHeader({ title, description }: Props) {
	return (
		<div>
			<div className="space-y-1">
				<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{title}</h1>
				<p className="text-lg text-zinc-600">{description}</p>
			</div>
			<div className="my-4 h-[1px] w-full bg-zinc-200 " />
		</div>
	)
}
