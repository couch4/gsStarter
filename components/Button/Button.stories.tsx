import { SyntheticEvent } from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import Button from './Button'
import { hideAllProps } from '@utils/storybook'
import { IButton, ButtonTypes } from './Button.types'

const ButtonStory = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { table: { disable: true } },
    size: { options: [null, 'xs', 'sm', 'md'] },
    ...hideAllProps(),
  },
}

const Template: Story<IButton> = (args: IButton) => {
  const handleOnClick = (event?: SyntheticEvent<HTMLDivElement>) => {
    action(`${args.variant} button clicked`)(event)
  }

  return <Button {...args} onClick={handleOnClick} />
}

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
  text: 'primary',
  variant: ButtonTypes.Primary,
  onClick: () => {},
}

Secondary.args = {
  text: 'secondary',
  variant: ButtonTypes.Secondary,
  onClick: () => {},
}

export default ButtonStory
