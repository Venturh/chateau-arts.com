interface Props {
	children: React.ReactNode
}

export function Badge({ children }: Props) {
	return (
		<span className="inline-flex items-center rounded bg-blue-100 px-1 py-[1px] text-[11px] font-medium text-blue-800">
			{children}
		</span>
	)
}
