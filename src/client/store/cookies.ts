import axios from 'axios'

interface Cookie {
  id?: number
  name: string
  glutenFree: boolean
  quantity: number
}

interface CookiesState {
  [index: number]: Cookie
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
