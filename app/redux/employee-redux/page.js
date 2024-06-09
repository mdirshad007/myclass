import React from 'react'
import AddEmployee from './components/AddEmployee/AddEmployee'
import EmployeeView from './components/EmployeeView/EmployeeView'

export default function page() {
  return (
    <div>
        <AddEmployee/>
        <EmployeeView/>
    </div>
  )
}
