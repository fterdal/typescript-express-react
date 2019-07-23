import axios from 'axios'

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
const REMOVE_COOKIE = 'REMOVE_COOKIE'

interface SetCookiesAction {
  type: typeof SET_COOKIES
  cookies: Cookie[]
}
interface AddCookieAction {
  type: typeof ADD_COOKIE
  cookie: Cookie
}
interface RemoveCookieAction {
  type: typeof REMOVE_COOKIE
  cookieId: number
}

export type CookiesActionTypes =
  | SetCookiesAction
  | AddCookieAction
  | RemoveCookieAction

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
const removeCookie = (cookieId: number): RemoveCookieAction => ({
  type: REMOVE_COOKIE,
  cookieId,
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

export const deleteCookie = (cookieId: number) => async (
  dispatch: (actionCreator: { type: string; cookieId: number }) => void
) => {
  try {
    await axios.delete(`/api/cookies/${cookieId}`)
    dispatch(removeCookie(cookieId))
  } catch (err) {
    console.log(err)
  }
}

// TODO: Use this to make a new cookie form
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

export const putCookie = (id: number, cookieToEdit: Cookie) => async (
  dispatch: any // Not ideal, but will probably do for now.
) => {
  try {
    await axios.put(`/api/cookies/${id}`, cookieToEdit)
    dispatch(fetchCookies())
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
    case ADD_COOKIE: {
      return [...state, action.cookie]
    }
    case REMOVE_COOKIE: {
      return state.filter(cookie => cookie.id !== action.cookieId)
    }
    default: {
      return state
    }
  }
}
