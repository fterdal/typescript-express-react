import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'

import { AppState, Cookie } from '../store'

import './SingleCookie.scss'
export const SingleCookie = (props: any) => {
  console.log(props)
  return <div className="single-cookie">Single Cookie Page</div>
}
