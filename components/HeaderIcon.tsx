import React from "react"

export default function HeaderIcon({ Icon,title }: any) {
  return (
    <div className="flex flex-col">
      <Icon className="w-8 h-8"/>
      <p>{title}</p>
    </div>
  )
}
