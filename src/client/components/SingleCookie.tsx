import React from 'react'
import { useSelector } from 'react-redux'

import { AppState, Cookie } from '../store'

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  const selectedId: number = Number(props.match.params.id)
  const selectedCookie = useSelector((store: AppState) =>
    store.cookies.find(cookie => cookie.id === selectedId)
  )
  if (!selectedCookie) return <div>Couldn't find this cookie!</div>
  const { name, quantity, glutenFree } = selectedCookie
  return (
    <div className="single-cookie">
      <div>
        <h2>{name}</h2>
        <div>Quantity: {quantity}</div>
        <div>{glutenFree ? 'Gluten Free!' : 'Contains Gluten'}</div>
      </div>
    </div>
  )
}
