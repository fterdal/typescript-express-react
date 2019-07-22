import React from 'react'
import { useSelector } from 'react-redux'
import { AppState, Cookie } from '../store'

import './ListCookies.scss'
export const ListCookies = () => {
  const cookies = useSelector((store: AppState) => store.cookies)
  return (
    <>
      {cookies && cookies.length ? (
        <div className="list-cookies">
          {cookies.map((cookie: Cookie) => (
            <div key={cookie.id} className="single-cookie-card">
              <div>
                <h3>{cookie.name}</h3>
                <div>Quantity: {cookie.quantity}</div>
              </div>
              <div className="gluten-free">
                {cookie.glutenFree ? 'Gluten Free!' : 'Contains Gluten'}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No cookies yet! 🍪 🤷‍ </div>
      )}
    </>
  )
}
