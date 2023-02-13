type Props = {
	children: React.ReactNode
}
export function Divider({ children }: Props) {
	return (
		<div className="relative mb-4">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-300 dark:border-zinc-800" />
			</div>
			<div className="relative flex justify-start">
				<span className="bg-white pr-3 text-lg font-medium text-gray-900 dark:bg-zinc-900 dark:text-zinc-50">
					{children}
				</span>
			</div>
		</div>
	)
}
