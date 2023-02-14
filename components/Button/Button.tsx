import { FC } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'
import { ButtonTypes, IButton } from './Button.types'

export const Button: FC<IButton> = ({
  text,
  onClick,
  variant = ButtonTypes.Primary,
  size,
  ...restProps
}) => {
  const styles = useStyleConfig('Button', { variant, size })

  return (
    <Box
      as="button"
      px={10}
      __css={styles}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: text }}
      {...restProps}
    />
  )
}

export default Button
