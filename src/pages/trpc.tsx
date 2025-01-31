import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import { trpc } from '../utils/trpc'

import styles from './trpc.module.css'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <Head>
        <title>pacxlab App</title>
        <meta name="description" content="Onboarding GenZ onchain with innovative learning platforms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <h1 className={styles.title}>
            Create <span className={styles.titlePink}>T3</span> App
          </h1>

          <h3 className={styles.subtitle}>This stack uses:</h3>
          <div className={styles.cardGrid}>
            <TechnologyCard name="NextJS" description="The React framework for production" documentation="https://nextjs.org/" />
            <TechnologyCard
              name="TypeScript"
              description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
              documentation="https://www.typescriptlang.org/"
            />
            <TechnologyCard
              name="TailwindCSS"
              description="Rapidly build modern websites without ever leaving your HTML"
              documentation="https://tailwindcss.com/"
            />
            <TechnologyCard name="tRPC" description="End-to-end typesafe APIs made easy" documentation="https://trpc.io/" />
            <TechnologyCard name="Next-Auth" description="Authentication for Next.js" documentation="https://next-auth.js.org/" />
            <TechnologyCard
              name="Prisma"
              description="Build data-driven JavaScript & TypeScript apps in less time"
              documentation="https://www.prisma.io/docs/"
            />
          </div>
          <div className={styles.helloFrom}>{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading...</p>}</div>
          <AuthShowcase />
        </div>
      </div>
    </>
  )
}

export default Home

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <div className={styles.authShowcase}>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button className={styles.signInButton} onClick={sessionData ? () => signOut() : () => signIn()}>
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}

type TechnologyCardProps = {
  name: string
  description: string
  documentation: string
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, description, documentation }) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <Link className={styles.cardDocumentation} href={documentation} target="_blank" rel="noreferrer">
        Documentation
      </Link>
    </section>
  )
}
