import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { trpc } from '@/utils/trpc'

import '@/styles/fairy.css'
// import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
