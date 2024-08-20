import React from 'react'
import Breadcrumb from '@components/Breadcrumb';
// import Employee from './employee/Employee';
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";


const Overview = () => {
  return (
    <>
        <Breadcrumb prevTitle="Employees" nextTitle="Overview" />
        <div className='component-header'>
          <h2 className='title'>Employees</h2>
          <span className='count'>20</span>
        </div>
        <div className='employee-filter'>
            <button>
                <FaFilter />
                <span>filter</span>
            </button>
            <div className='employee-search'>
               <input type='text' placeholder='Type in Name, Function or other attributes to start searching...'/>
               <span><CiSearch /></span>     
            </div>
        </div>
    </>
  )
}

export default Overview
