'use client'
import { candidateAPI } from "@/apiResponse/candidate"
import { useEffect, useState } from "react"

export default function MePage() {
  const [data, setData] = useState(null)
  useEffect(() => {
    candidateAPI.me().then(response => setData(response.payload))
  },[])
  return <div>MePage</div>
}