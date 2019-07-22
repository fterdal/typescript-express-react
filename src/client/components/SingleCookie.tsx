import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { AppState, Cookie } from '../store'

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  const selectedId: number = Number(props.match.params.id)
  const selectedCookie = useSelector((store: AppState) =>
    store.cookies.find(cookie => cookie.id === selectedId)
  )
  const [newName, setNewName] = useState(
    (selectedCookie && selectedCookie.name) || null
  )
  const [newQuantity, setNewQuantity] = useState(
    (selectedCookie && selectedCookie.quantity) || null
  )
  const [newGlutenFree, setNewGlutenFree] = useState(
    (selectedCookie && selectedCookie.glutenFree) || undefined
  )
  if (!selectedCookie) return <div>Couldn't find this cookie!</div>

  const handleSubmit = (evt: any) => {
    evt.preventDefault()
  }

  const { name, quantity, glutenFree } = selectedCookie
  return (
    <div className="single-cookie">
      <form onSubmit={handleSubmit}>
        <h2>
          <input
            value={newName !== null ? newName : name}
            onChange={evt => setNewName(evt.target.value)}
          />
        </h2>
        <label>
          Quantity:
          <input
            type="number"
            value={newQuantity !== null ? newQuantity : quantity}
            onChange={evt => setNewQuantity(Number(evt.target.value))}
          />
        </label>
        <label>
          {/* Try loading the single cookie component on a hard refresh where the cookie
              glutenFree is true. Then check the box. At present, it won't change.
              However, the hook's state does seem to change, just not the html element's state. */}
          <input
            type="checkbox"
            // checked={newGlutenFree !== undefined ? undefined : true}
            // checked={newGlutenFree}
            onChange={evt => {
              console.log('changing checkbox', newGlutenFree)
              setNewGlutenFree(newGlutenFree ? undefined : true)
            }}
          />
        </label>
        <div>{glutenFree ? 'Gluten Free!' : 'Contains Gluten'}</div>
        <button className="edit-cookie-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
