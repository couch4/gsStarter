import { Image as ChakraImage } from '@chakra-ui/react'
import NextImage from 'next/image'

const Image = ({...restProps}) => {
    return <ChakraImage as={NextImage} {...restProps} />
}

export default Image