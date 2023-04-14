import { Button, Flex } from '@sanity/ui'
import { ToolLink, ToolMenuProps, defineConfig } from 'sanity'

export function ToolMenu(props: ToolMenuProps) {
	const { activeToolName, context, tools } = props

	const isSidebar = context === 'sidebar'

	const direction = isSidebar ? 'column' : 'row'

	//remove default desk tool
	const enabledTools = [tools[2], tools[1]]

	return (
		<Flex gap={3} direction={direction}>
			{enabledTools.map((tool) => (
				<Button
					as={ToolLink}
					key={tool.name}
					name={tool.name}
					selected={tool.name === activeToolName}
					text={tool.title || tool.name}
					mode="bleed"
				/>
			))}
			<Button
				as="a"
				href="https://umami-analytics-sage.vercel.app/websites/c73161e2-5632-42ac-a5e6-2b0b8e746b89/elisabethwerpers.com"
				key="analytics"
				name="analytics"
				text="Analytics"
				mode="bleed"
			/>
		</Flex>
	)
}
