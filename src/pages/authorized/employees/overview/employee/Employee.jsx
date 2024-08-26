import React from 'react'
import '@styles/_employee.css';
import { Link } from 'react-router-dom';
import Profile from '../../../../../assets/profile.png'
import Tab from '@components/Tab';
import TabPane from '@components/TabPane';
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import EmployeeFilter from '@template/EmployeeFilter';


const Employee = () => {
  return (
    <>
        <div className='employee-content-wrap'>
            <div className='col-left'>
                <EmployeeFilter />
            </div>
            <div className='col-right'>
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
                        <div className="main-table">
                            <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Employment</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Teams</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="tbl-name-cover">
                                            <img src={Profile} alt=""/>
                                            <Link to={''}>
                                                
                                                <span>Olivia Rhye</span>
                                            </Link>
                                        </div>
                                    </td>
                                    <td> <span className="active-emp">Active</span> </td>
                                    <td>Intern</td>
                                    <td>olivia@kistr.de</td>
                                    <td>Munich</td>
                                    <td>Design</td>
                                    <td>Head of Design</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tbl-name-cover">
                                            <img src={Profile} alt=""/>
                                            <Link to={''}>
                                                
                                                <span>Olivia Rhye</span>
                                            </Link>
                                        </div>
                                    </td>
                                    <td> <span className="active-emp">Active</span> </td>
                                    <td>Intern</td>
                                    <td>olivia@kistr.de</td>
                                    <td>Munich</td>
                                    <td>Design</td>
                                    <td>Head of Design</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tbl-name-cover">
                                            <img src={Profile} alt=""/>
                                            <Link to={''}>
                                                
                                                <span>Olivia Rhye</span>
                                            </Link>
                                        </div>
                                    </td>
                                    <td> <span className="active-emp">Active</span> </td>
                                    <td>Intern</td>
                                    <td>olivia@kistr.de</td>
                                    <td>Munich</td>
                                    <td>Design</td>
                                    <td>Head of Design</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tbl-name-cover">
                                            <img src={Profile} alt=""/>
                                            <Link to={''}>
                                                
                                                <span>Olivia Rhye</span>
                                            </Link>
                                        </div>
                                    </td>
                                    <td> <span className="active-emp">Active</span> </td>
                                    <td>Intern</td>
                                    <td>olivia@kistr.de</td>
                                    <td>Munich</td>
                                    <td>Design</td>
                                    <td>Head of Design</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tbl-name-cover">
                                            <img src={Profile} alt=""/>
                                            <Link to={''}>
                                                
                                                <span>Olivia Rhye</span>
                                            </Link>
                                        </div>
                                    </td>
                                    <td> <span className="active-emp">Active</span> </td>
                                    <td>Intern</td>
                                    <td>olivia@kistr.de</td>
                                    <td>Munich</td>
                                    <td>Design</td>
                                    <td>Head of Design</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </TabPane>
                    <TabPane label="Orgchart">
                        <p>teast2</p>
                    </TabPane>
                    <TabPane label="Files">
                        <p>teast3</p>
                    </TabPane>
                </Tab>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Employee