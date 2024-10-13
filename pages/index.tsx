import Head from 'next/head'
import Login from '@/components/Login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Petri Plate Analyzer</title>
        <meta name="description" content="Analyze Petri plates for contamination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-100">
        <Login />
      </main>
    </>
  )
}
