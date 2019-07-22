import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { AppState, Cookie } from '../store'

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  const selectedId: number = Number(props.match.params.id)
  const selectedCookie = useSelector((store: AppState) =>
    store.cookies.find(cookie => cookie.id === selectedId)
  )

  // This early return before the hooks will cause React a lot of confusion!
  // Gonna have to refactor...
  if (!selectedCookie) return <div>Couldn't find this cookie!</div>
  const { name, quantity, glutenFree } = selectedCookie
  const [newName, setNewName] = useState(name)
  const [newQuantity, setNewQuantity] = useState(quantity)
  const [newGlutenFree, setNewGlutenFree] = useState(glutenFree)
  console.log(newName)
  return (
    <div className="single-cookie">
      <div>
        <h2>
          <input value={newName} onChange={evt => setNewName(evt.target.value)} />
        </h2>
        <div>Quantity: {quantity}</div>
        <div>{glutenFree ? 'Gluten Free!' : 'Contains Gluten'}</div>
      </div>
    </div>
  )
}
