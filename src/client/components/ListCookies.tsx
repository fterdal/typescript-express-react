import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'

import './ListCookies.scss'
export const ListCookies = () => {
  const cookies = useSelector((store: AppState) => store.cookies)
  return (
    <div className="list-cookies">
      {cookies && cookies.length ? (
        <ul>
          <li>Cookie 1</li>
          <li>Cookie 2</li>
        </ul>
      ) : (
        <div>No cookies yet! 🍪 🤷‍ </div>
      )}
    </div>
  )
}

export default ListCookies
