import React from 'react'
import Breadcrumb from '@components/Breadcrumb';
import Employee from './employee/Employee';


const Overview = () => {
  return (
    <>
        <Breadcrumb prevTitle="Employees" nextTitle="Overview" />
        <div className='component-header'>
          <h2 className='title'>Employees</h2>
          <span className='count'>20</span>
        </div>
        <Employee />
    </>
  )
}

export default Overview
