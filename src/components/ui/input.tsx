import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	hint?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, label, hint, ...props }, ref) => {
		return (
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
				>
					{label}
				</label>
				<div className="mt-1">
					<input
						className="flex h-10 w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
						ref={ref}
						{...props}
					/>
					{hint && (
						<p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200" id="hint">
							{hint}
						</p>
					)}
				</div>
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
