'use client'
import { Box, Text } from '@chakra-ui/react'
import { AnimatedStack, Button, PageWrapper } from '@components'
import useStore from '@store'
import { exampleAnim, mockItemStyle } from './page.styles'

const mockItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

export default function Home() {
  const { isLoading } = useStore() // zustand state variable example

  const renderMockItems = mockItems.map((val, i) => {
    return (
      <Box key={`item${i}`} {...mockItemStyle}>
        {val}
      </Box>
    )
  })

  return (
    <PageWrapper centerContent border="1px dashed rgba(0,0,0,0.2)">
      <Text textStyle="h1" m="2rem 0">
        Welcome to Great State
      </Text>
      <Button variant="secondary" text="test button" />
      <Box {...exampleAnim} />
      <AnimatedStack delay={2} width="50%" mt="2rem">
        {renderMockItems}
      </AnimatedStack>
    </PageWrapper>
  )
}
