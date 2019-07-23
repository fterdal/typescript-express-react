import React from 'react'
import { SingleCookieHelper } from './SingleCookie'

import './CreateCookie.scss'
export const CreateCookie = (props: any) => {
  const redirectToCookies = () => {
    props.history.push('/cookies')
  }
  const SingleCookieProps = {
    id: NaN,
    name: '',
    quantity: 0,
    glutenFree: false,
    redirect: redirectToCookies,
    editExisting: false,
  }
  return (
    <div>
      <SingleCookieHelper {...SingleCookieProps} />
    </div>
  )
}
