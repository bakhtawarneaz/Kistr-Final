import React from 'react'
import { IoChevronForward } from "react-icons/io5";
import '@styles/_breadcrumb.css';

const Breadcrumb = ({prevTitle,nextTitle}) => {
  return (
    <div className='breadcrumb-wrap'>
      <ul>
        <li className='prev'>{prevTitle}</li>
        <li className='icon'><IoChevronForward /></li>
        <li className='next'>{nextTitle}</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
