import React from 'react'
import Breadcrumb from '@components/Breadcrumb';
import Tab from '@components/Tab';
import TabPane from '@components/TabPane';
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Employee from './employee/Employee';


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
        <div className='table-btn'>
            <button>
                <FiPlus />
                <span>Add employee</span>
            </button>
        </div>
        <div id='employee-tab'>
          <Tab>
              <TabPane label="List view">
                  <Employee />
              </TabPane>
              <TabPane label="Orgchart">
                  <p>teast2</p>
              </TabPane>
              <TabPane label="Files">
                  <p>teast3</p>
              </TabPane>
          </Tab>
        </div>
    </>
  )
}

export default Overview
