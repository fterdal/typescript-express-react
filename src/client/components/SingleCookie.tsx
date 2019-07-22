import React, { useContext, Props } from 'react'
import { useSelector } from 'react-redux'

import { AppState, Cookie } from '../store'

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  const selectedId: number = Number(props.match.params.id)
  const selectedCookie = useSelector((store: AppState) =>
    store.cookies.find(cookie => cookie.id === selectedId)
  )
  return (
    <div className="single-cookie">
      {selectedCookie ? (
        <div>Found this cookie: {selectedCookie.name}</div>
      ) : (
        <div>Couldn't find this cookie!</div>
      )}
    </div>
  )
}
