import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { AppState, Cookie } from '../store'

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  const selectedId: number = Number(props.match.params.id)
  const selectedCookie = useSelector((store: AppState) =>
    store.cookies.find(cookie => cookie.id === selectedId)
  )
  if (!selectedCookie) return <div>Cookie Not Found</div>
  return <SingleCookieHelper {...selectedCookie} />
}

// We need this wrapper/helper pattern so that the
const SingleCookieHelper = (props: Cookie) => {
  const { name, quantity, glutenFree } = props
  const [newName, setNewName] = useState(name)
  const [newQuantity, setNewQuantity] = useState(quantity)
  const [newGlutenFree, setNewGlutenFree] = useState(glutenFree)

  const handleSubmit = (evt: any) => {
    evt.preventDefault()
    console.log({ newName, newQuantity, newGlutenFree })
  }

  return (
    <div className="single-cookie">
      <div />
      <form className="single-cookie-form" onSubmit={handleSubmit}>
        <h2>
          <input
            value={newName}
            onChange={evt => setNewName(evt.target.value)}
          />
        </h2>
        <label>
          Quantity:
          <input
            type="number"
            value={newQuantity}
            onChange={evt => setNewQuantity(Number(evt.target.value))}
          />
        </label>
        <label>
          Gluten-Free?<span>&nbsp;</span>
          <input
            type="checkbox"
            checked={newGlutenFree}
            onChange={() => setNewGlutenFree(!newGlutenFree)}
          />
        </label>
        <button className="edit-cookie-button" type="submit">
          Submit Changes
        </button>
      </form>
      <div />
    </div>
  )
}
