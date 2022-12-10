import React from "react"
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import HeaderIcon from "./HeaderIcon"

export default function Header() {
  return (
    <div className="flex">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title={`Home`} />
        <HeaderIcon Icon={UserIcon} title={`Home`} />
        <HeaderIcon Icon={PhoneIcon} title={`Home`} />
        <HeaderIcon Icon={InformationCircleIcon} title={`Home`} />
      </div>
      <Image
        src={`https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg`}
        alt=""
        width={100}
        height={50}
      />
    </div>
  )
}
