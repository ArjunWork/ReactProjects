import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className="bg-gray-400 text-center py-12 text-2xl">User:{userid}</div>
  )
}

export default User