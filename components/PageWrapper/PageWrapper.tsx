import { Container } from '@chakra-ui/react'
import { container } from './PageWrapper.styles'

const PageWrapper = ({...restProps}) => {
    return <Container {...container} {...restProps} />
}

export default PageWrapper