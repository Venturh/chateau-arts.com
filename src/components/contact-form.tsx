'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TextArea } from '@/components/ui/textarea'
import Success from './ui/success'

type Props = {
	contactName: string
	contactEmail: string
	contactMessage: string
	contactSend: string
	successMessage: string
}

export function ContactForm({
	contactName,
	contactEmail,
	contactMessage,
	contactSend,
	successMessage,
}: Props) {
	const [showSuccess, setShowSuccess] = useState(false)
	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const target = e.target as HTMLFormElement
		const formData = new FormData(e.target as HTMLFormElement)

		try {
			fetch('/api/contact-form', {
				method: 'POST',
				body: formData,
			})

			target.reset()
			setShowSuccess(true)
		} catch (error) {}
	}
	return (
		<form className="mt-6 grid  gap-y-6" onSubmit={(e) => submitForm(e)}>
			<Input required name="name" label={contactName} />
			<Input required name="email" label={contactEmail} type="email" />
			<TextArea required rows={4} name="message" label={contactMessage} />
			<Button type="submit">{contactSend}</Button>
			{showSuccess && <Success>{successMessage}</Success>}
		</form>
	)
}
