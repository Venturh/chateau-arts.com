import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
	runtime: 'edge',
}

export default async function handler(req: NextRequest) {
	const { searchParams } = req.nextUrl
	const pageTitle = searchParams.get('title')
	const locale = searchParams.get('locale')
	const type = searchParams.get('type')
	const messages = await import(`../../../messages/${locale}.json`)
	const { title } = messages.og

	const mappedType = {
		exhibition: messages.exhibition,
		exhibit: messages.exhibit,
	}
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
						left: 42,
						top: 42,
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<span
						style={{
							marginLeft: 8,
							fontSize: 20,
						}}
					>
						elisabethwerpers.com
					</span>
				</div>
				<div
					style={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						padding: '20px 50px',
						margin: '0 42px',
						fontSize: 40,
						width: 'auto',
						maxWidth: 550,
						textAlign: 'center',
						color: 'black',
						lineHeight: 1.4,
					}}
				>
					{title}
				</div>
				{pageTitle ? (
					<div
						style={{
							flexWrap: 'wrap',
							justifyContent: 'center',
							padding: '20px 50px',
							margin: '0 42px',
							fontSize: 40,
							width: 'auto',
							maxWidth: 550,
							textAlign: 'center',
							color: 'black',
							lineHeight: 1.4,
						}}
					>
						{mappedType[type] ? `${mappedType[type]} -  ${pageTitle}` : pageTitle}
					</div>
				) : null}
			</div>
		)
	)
}
