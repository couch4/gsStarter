'use client'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { PageWrapper } from '@components'
import theme from '@theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
