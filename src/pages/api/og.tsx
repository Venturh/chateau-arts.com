import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
	runtime: 'edge',
}

export default async function handler(req: NextRequest) {
	const { searchParams } = req.nextUrl
	const locale = searchParams.get('locale')
	const messages = await import(`../../../messages/${locale}.json`)
	const { title, description } = messages.og

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					letterSpacing: '-.02em',
					fontWeight: 700,
					background: 'white',
				}}
			>
				<div
					style={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						padding: '20px 50px',
						margin: '0 42px',
						fontSize: 52,
						width: 'auto',
						maxWidth: 550,
						textAlign: 'center',
						color: 'black',
						lineHeight: 1.4,
					}}
				>
					{title}
				</div>
				<div
					style={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						padding: '20px 50px',
						margin: '0 42px',
						fontSize: 28,
						width: 'auto',
						maxWidth: 550,
						textAlign: 'center',
						color: 'black',
						lineHeight: 1.4,
					}}
				>
					{description}
				</div>
			</div>
		)
	)
}
