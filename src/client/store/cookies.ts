import axios from 'axios'

interface Cookie {
  id?: number
  name: string
  glutenFree: boolean
  quantity: number
}

// TODO: Figure out if this is actually the best way to interface an array...
// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects-with-typescript
interface CookiesState {
  [index: number]: Cookie
  length: number
}

// ACTION TYPES
const SET_COOKIES = 'SET_COOKIES'

interface SetCookiesAction {
  type: typeof SET_COOKIES
  cookies: Cookie[]
}
export type CookiesActionTypes = SetCookiesAction

// ACTION CREATORS
const setCookies = (cookies: Cookie[]): CookiesActionTypes => ({
  type: SET_COOKIES,
  cookies,
})

// THUNK CREATORS
export const fetchCookies = () => async (
  dispatch: (actionCreator: { type: string; cookies: Cookie[] }) => void
) => {
  try {
    const { data: cookies } = await axios.get('/api/cookies')
    dispatch(setCookies(cookies))
  } catch (err) {}
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
