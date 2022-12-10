import React from "react"

export default function HeaderIcon({ Icon,title }: any) {
  return (
    <div className="flex flex-col mx-4 lg:mx-6 hover:text-white active:text-red-400 cursor-pointer">
      <Icon className="w-8 h-8"/>
      <p className="my-2">{title}</p>
    </div>
  )
}
