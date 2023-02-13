import React from 'react'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
	hint?: string
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ className, label, hint, ...props }, ref) => {
		return (
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
				>
					{label}
				</label>
				<div className="mt-1">
					<textarea
						className="flex h-20 w-full rounded-md border border-zinc-300 bg-transparent py-2 px-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900"
						ref={ref}
						{...props}
					/>
					{hint && <p className="mt-2 text-sm text-gray-700 dark:text-zinc-200 ">{hint}</p>}
				</div>
			</div>
		)
	}
)
TextArea.displayName = 'TextArea'

export { TextArea }
