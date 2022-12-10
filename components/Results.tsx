import React from "react"

export default function Results({ results }: any) {
  return (
    <div>
      {results.map((result: any) => (
        <h1 key={result.title}>{result.title}</h1>
      ))}
    </div>
  )
}
