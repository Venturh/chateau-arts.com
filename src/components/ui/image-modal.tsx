import { XMarkIcon } from '@heroicons/react/24/outline'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

type Props = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	children: React.ReactNode
}

export function ImageModal({ isOpen, setIsOpen, children }: Props) {
	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<DialogPrimitive.Portal>
				<div className="fixed inset-0 z-50 flex w-screen items-start justify-center bg-white sm:items-center">
					<DialogPrimitive.Content className="fixed z-50 flex h-screen w-screen scale-100 flex-col   animate-in fade-in-90 slide-in-from-bottom-10 sm:max-w-2xl sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0">
						<div className="my-auto h-[50vh]">{children}</div>
						<DialogPrimitive.Close
							className={cn(
								'absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1',
								'focus:outline-none focus-visible:ring'
							)}
						>
							<XMarkIcon className="h-4 w-4 text-zinc-500 hover:text-zinc-700  " />
						</DialogPrimitive.Close>
					</DialogPrimitive.Content>
				</div>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	)
}
