import React from 'react'
import '@styles/_employee.css';
import { Link } from 'react-router-dom';
import Profile from '../../../../../assets/profile.png'


const Employee = () => {
  return (
    <>
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
    </>
  )
}

export default Employee