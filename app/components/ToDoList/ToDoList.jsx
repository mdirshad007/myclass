import React from 'react'
import TaskDone from '../TaskDone/TaskDone'
import Link from 'next/link'
import TaskNotDone from '../TaskNotDone/TaskNotDone'

export default function ToDoList() {
  return (
   <ul>
     <Link href="/change-background"><TaskDone taskName="Bg Color change"/></Link>
    <TaskNotDone taskName="Bg Color change"/>  
   </ul>
  )
}
