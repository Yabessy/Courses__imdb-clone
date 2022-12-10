import { HandThumbUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"

export default function ResultCard({ result }: any) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <Image
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        alt=""
        width={200}
        height={100}
      />
      <div>
        <p className="truncate">{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>
          {result.release_date || result.first_air_date} <HandThumbUpIcon className="w-5" />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}
