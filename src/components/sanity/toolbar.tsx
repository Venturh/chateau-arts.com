import { Button, Flex } from '@sanity/ui'
import { defineConfig, ToolLink, ToolMenuProps } from 'sanity'

export function ToolMenu(props: ToolMenuProps) {
	const { activeToolName, context, tools } = props

	const isSidebar = context === 'sidebar'

	const direction = isSidebar ? 'column' : 'row'

	return (
		<Flex gap={3} direction={direction}>
			{tools.map((tool) => (
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
				href="https://umami.werpers.dev/websites/bf13c4d6-5d27-4b4e-9707-96d3ddac0fc9"
				key="analytics"
				name="analytics"
				text="Analytics"
				mode="bleed"
			/>
		</Flex>
	)
}
