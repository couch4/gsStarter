import { Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { Story } from '@storybook/react'
import AnimatedStack from './AnimatedStack'
import { hideAllProps } from '@utils/storybook'
import { IAnimatedStack, AnimatedStackTypes } from './AnimatedStack.types'

const mockItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

const AnimatedStackStory = {
  title: 'Components/AnimatedStack',
  component: AnimatedStack,
  argTypes: {
    variant: { table: { disable: true } },
    ...hideAllProps(),
  },
}

const Template: Story<IAnimatedStack> = (args: IAnimatedStack) => {
  const renderMockItems = mockItems.map((val, i) => {
    return (
      <Box key={`item${i}`} {...mockItemStyle}>
        {val}
      </Box>
    )
  })

  return <AnimatedStack {...args}>{renderMockItems}</AnimatedStack>
}

export const Column = Template.bind({})
export const Row = Template.bind({})

Column.args = {
  variant: AnimatedStackTypes.Column,
}

Row.args = {
  variant: AnimatedStackTypes.Row,
}

const mockItemVariants: Variants = {
  inactive: {
    y: 50,
    opacity: 0,
  },
  active: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 40,
    },
  },
}

const mockItemStyle = {
  padding: '1rem',
  width: '100%',
  background: 'white',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  as: motion.div,
  variants: mockItemVariants,
  _hover: {
    background: 'brand.teal',
    color: 'white',
  },
}

export default AnimatedStackStory
