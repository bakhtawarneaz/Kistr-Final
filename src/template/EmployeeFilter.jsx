import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const EmployeeFilter = () => {
  return (
    <div className='employee-filter-wrap'>
      <div className="filter-head">
          <span>filter</span>
          <IoCloseOutline />
      </div>
      <div className="filter-type">
          <p>Status</p>
          <ul>
              <li className="">Active</li>
              <li className="">Resigned</li>
              <li className="">Maternal_leave</li>
              <li className="">Paternal Leave</li>
              <li className="">Sabbatical</li>
          </ul>
      </div>
      <div className="filter-type">
          <p>Employment Type</p>
          <ul>
              <li className="">Intern</li>
              <li className="">Extern</li>
              <li className="">Internship</li>
              <li className="">Trainee</li>
              <li className="">Working Student</li>
          </ul>
      </div>
      <div className="filter-type">
          <p>Location</p>
          <ul>
              <li className="">Munich</li>
              <li className="">Berlin</li>
              <li className="">Frankfurt</li>
              <li className="">Trainee</li>
              <li className="">Working Student</li>
          </ul>
      </div>
      <div className="filter-type">
          <p>Team</p>
          <ul>
              <li className="">Design</li>
              <li className="">Sales</li>
              <li className="">Marketing</li>
              <li className="">Devops</li>
              <li className="">Development</li>
          </ul>
      </div>
      <div class="filter-btn-wrap">
        <button class="btn1">
          <IoCheckmark />
          <span>Apply filter</span>
        </button>
        <button class="btn2">
          <span>Save as own view</span>
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  )
}

export default EmployeeFilter
