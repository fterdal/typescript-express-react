import React from 'react'
import { useSelector } from 'react-redux'

import './ListCookies.scss'
export const ListCookies = () => {
  const cookies = useSelector(({ cookies }) => cookies)
  return (
    <div className="list-cookies">
      <ul>
        <li>Cookie 1</li>
        <li>Cookie 2</li>
      </ul>
    </div>
  )
}

export default ListCookies
