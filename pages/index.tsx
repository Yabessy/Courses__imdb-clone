import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Header, Navbar, Results } from "../components"
import requests from "../utils/requests"

export default function Home({ results }: any) {
  console.log(results)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const genre = context.query.genre || "fetchTrending"
  // @ts-ignore
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre].url}`)
  .then((res) => res.json())
  return {
    props: {
      results: request.results
    }
  }
}
