import { NextApiRequest, NextApiResponse } from 'next'
import { SendMailOptions, createTransport } from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const transporter = createTransport({
		host: 'mail.privateemail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.PRIVATE_MAIL,
			pass: process.env.PRIVATE_MAIL_PASSWORD,
		},
	})
	const body = req.body
	const msg: SendMailOptions = {
		from: process.env.PRIVATE_MAIL,
		to: process.env.PRIVATE_MAIL,
		subject: `Werkanfrage zu ${body.exhibit}`,
		html: `<div> <h1>Neue Nachricht von ${body.name}</h1>
        <p>Email: ${body.email}</p> <p>Nachricht: ${body.message}</p> </div>`,
	}

	try {
		await transporter.sendMail(msg)
		return res.status(200).end()
	} catch (error) {
		console.log(error)
		return res.status(500).end()
	}
}
