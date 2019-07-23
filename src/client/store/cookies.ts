import axios, { AxiosResponse } from 'axios'

export interface Cookie {
  id?: number
  name: string
  glutenFree: boolean
  quantity: number
}

// TODO: Figure out if this is actually the best way to interface an array...
// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects-with-typescript
// interface CookiesState {
//   [index: number]: Cookie
//   length: number
//   map: Function
// }

// Huh, maybe this works too!? Not as silly as manually adding .length, .map()
interface CookiesState extends Array<Cookie> {}

// ACTION TYPES
const SET_COOKIES = 'SET_COOKIES'
const ADD_COOKIE = 'ADD_COOKIE'

interface SetCookiesAction {
  type: typeof SET_COOKIES
  cookies: Cookie[]
}
interface AddCookieAction {
  type: typeof ADD_COOKIE
  cookie: Cookie
}
export type CookiesActionTypes = SetCookiesAction | AddCookieAction

// ACTION CREATORS
// I'd prefer to be able to use CookiesActionTypes here instead of the more
// specific SetCookiesAction, but TypeScript doesn't seem to be inferring
// return type correctly.
const setCookies = (cookies: Cookie[]): SetCookiesAction => ({
  type: SET_COOKIES,
  cookies,
})

const addCookie = (cookie: Cookie): AddCookieAction => ({
  type: ADD_COOKIE,
  cookie,
})

// THUNK CREATORS
export const fetchCookies = () => async (
  dispatch: (actionCreator: { type: string; cookies: Cookie[] }) => void
) => {
  try {
    const { data: cookies } = await axios.get('/api/cookies')
    dispatch(setCookies(cookies))
  } catch (err) {
    console.log(err)
  }
}

export const postCookie = (cookieToAdd: Cookie) => async (
  dispatch: (actionCreator: { type: string; cookie: Cookie }) => void
) => {
  try {
    const { data: cookie } = await axios.post('/api/cookies', cookieToAdd)
    dispatch(addCookie(cookie))
  } catch (err) {
    console.log(err)
  }
}

const initialState: CookiesState = []

// REDUCER
export const cookiesReducer = (
  state = initialState,
  action: CookiesActionTypes
): CookiesState => {
  switch (action.type) {
    case SET_COOKIES: {
      return action.cookies
    }
    default: {
      return state
    }
  }
}
