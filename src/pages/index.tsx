import React from 'react'
import { Meta } from '@/layouts'
import Head from 'next/head'

import dynamic from 'next/dynamic'
const View = dynamic(() => import('@/views/Fairy'), {
  ssr: false
})

export default function Page() {
  return (
    <>
      <Head>
        <title>pacxlabs</title>
        <meta name="description" content="Onboarding Gen Z onchain with innovative learning platforms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta />
      <View />
    </>
  )
}
