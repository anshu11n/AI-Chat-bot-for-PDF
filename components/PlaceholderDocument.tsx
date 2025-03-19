"use client"
// for interactive component 'use client'

import { PlusCircleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

function Placeholder() {
  const router = useRouter();

  const handleClick = () => {
    // Check is user is pro or free trial for file limit, push to upgrade page

    router.push('/dashboard/upload');
  }

  return (
    <Button onClick={handleClick} className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
      <PlusCircleIcon/>
      <p>Add a document</p>
    </Button>
  )
}
export default Placeholder