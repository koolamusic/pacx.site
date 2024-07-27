/* eslint-disable */
import type { NextApiHandler } from 'next'
import { router as appRouter } from '@/server/trpc/trpc'
import { nextHandler } from 'trpc-playground/handlers/next'

const setupHandler = nextHandler({
  // @ts-ignore
  router: appRouter,
  // tRPC api path, pages/api/trpc/[trpc].ts in this case
  trpcApiEndpoint: '/api/trpc',
  playgroundEndpoint: '/api/playground',
  // uncomment this if you're using superjson
  request: {
    superjson: true
  }
})

const handler: NextApiHandler = async (req, res) => {
  const playgroundHandler = await setupHandler

  if (process.env.NODE_ENV === 'development') {
    await playgroundHandler(req, res)
  } else {
    res.status(200).json({})
  }
}

export default handler
