import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = req.body

	const msg = {
		template_id: process.env.SENDGRID_TEMPLATE_ID,
		from: { email: process.env.SENDGRID_MAIL },
		personalizations: [
			{
				to: [{ email: 'venturh94@gmail.com', name: '' }],
				dynamic_template_data: {
					exhibit: body.exhibit,
					name: body.name,
					email: body.email,
					message: body.message,
				},
			},
		],
	}

	try {
		const data = await fetch('https://api.sendgrid.com/v3/mail/send', {
			method: 'POST',
			body: JSON.stringify(msg),
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${process.env.SENDGRID_TOKEN}`,
			},
		})
		return res.status(200).end()
	} catch (error) {
		return res.status(500).end()
	}
}
