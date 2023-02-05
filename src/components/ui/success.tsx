import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

type Props = {
	children: React.ReactNode
}

export default function Success({ children }: Props) {
	return (
		<div className="rounded-md bg-green-50 p-4">
			<div className="flex">
				<div className="shrink-0">
					<CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-green-800">{children}</p>
				</div>
			</div>
		</div>
	)
}
