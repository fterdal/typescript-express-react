import React, { useState, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState, Cookie, putCookie, deleteCookie } from '../store'

// We need this wrapper/helper pattern here. If we tried to write an early return
// as above, we couldn't also use hooks with the resulting data, because they may
// not fire in the same order on successive renders.

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  const selectedId: number = Number(props.match.params.id)
  const selectedCookie = useSelector((store: AppState) =>
    store.cookies.find(cookie => cookie.id === selectedId)
  )
  const redirectToCookies = () => {
    props.history.push('/cookies')
  }
  if (!selectedCookie) {
    return <div className="cookie-not-found">Cookie Not Found</div>
  }
  return (
    <SingleCookieHelper
      {...selectedCookie}
      id={selectedId}
      redirect={redirectToCookies}
    />
  )
}

interface SingleCookieProps extends Cookie {
  id: number
  redirect: () => void
}

const SingleCookieHelper = (props: SingleCookieProps) => {
  const { id, name, quantity, glutenFree, redirect } = props
  const [newName, setNewName] = useState(name)
  const [newQuantity, setNewQuantity] = useState(quantity)
  const [newGlutenFree, setNewGlutenFree] = useState(glutenFree)
  const dispatch = useDispatch()

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(
      putCookie(id, {
        name: newName,
        quantity: newQuantity,
        glutenFree: newGlutenFree,
      })
    )
  }

  const handleDelete = () => {
    dispatch(deleteCookie(id))
    redirect()
  }

  return (
    <div className="single-cookie">
      <div />
      <form className="single-cookie-form" onSubmit={handleSubmit}>
        <div className="single-cookie-name">
          <input
            value={newName}
            onChange={evt => setNewName(evt.target.value)}
          />
        </div>
        <label>
          Quantity:{' '}
          <input
            type="number"
            value={newQuantity}
            onChange={evt => setNewQuantity(Number(evt.target.value))}
          />
        </label>
        <label>
          Gluten-Free?{' '}
          <input
            type="checkbox"
            checked={newGlutenFree}
            onChange={() => setNewGlutenFree(!newGlutenFree)}
          />
        </label>
        <button className="edit-cookie-button" type="submit">
          Submit Changes
        </button>
        <button
          type="button"
          className="button-outline delete-cookie-button"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </form>
      <div />
    </div>
  )
}
