import React from "react"
import ResultCard from "./ResultCard"

export default function Results({ results }: any) {
  return (
    <div>
      {results.map((result: any) => (
        <ResultCard key={result.id} result={result}/>
      ))}
    </div>
  )
}
