import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState, Cookie } from '../store'

import './ListCookies.scss'
export const ListCookies = () => {
  const cookies = useSelector((store: AppState) => store.cookies)
  return (
    <>
      {cookies && cookies.length ? (
        <div className="list-cookies">
          {cookies.map((cookie: Cookie) => (
            <Link key={cookie.id} to={`/cookies/${cookie.id}`}>
              <div className="single-cookie-card">
                <div>
                  <h3>{cookie.name}</h3>
                  <div>Quantity: {cookie.quantity}</div>
                </div>
                <div className="gluten-free">
                  {cookie.glutenFree ? 'Gluten Free!' : 'Contains Gluten'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No cookies yet! 🍪 🤷‍ </div>
      )}
    </>
  )
}
