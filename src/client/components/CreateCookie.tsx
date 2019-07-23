import React from 'react'
import { SingleCookieHelper } from './SingleCookie'

export const CreateCookie = (props: any) => {
  const redirectToCookies = () => {
    props.history.push('/cookies')
  }
  const SingleCookieProps = {
    name: '',
    quantity: 0,
    glutenFree: false,
    redirect: redirectToCookies,
  }
  return <SingleCookieHelper {...SingleCookieProps} />
}
