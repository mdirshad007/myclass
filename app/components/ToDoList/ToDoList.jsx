import React from 'react'
import TaskDone from '../TaskDone/TaskDone'
import Link from 'next/link'
import TaskNotDone from '../TaskNotDone/TaskNotDone'

export default function ToDoList() {
  return (
   <ul>
     <Link href="/change-background"><TaskDone taskName="Bg Color change"/></Link>
     <Link href="/users"><TaskDone taskName="User fetch"/> </Link>
     <Link href="/test-context"><TaskDone taskName="Use of Context"/> </Link>
     <Link href="/server-side-api-data"><TaskDone taskName="Server Side Data Fetch"/> </Link>
     <Link href="/redux/use-redux"><TaskNotDone taskName="Redux tool kit"/> </Link>
   </ul>
  )
}
