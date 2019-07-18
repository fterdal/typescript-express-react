interface CookieInstance {
  id: number,
  name: string,
  glutenFree: boolean,
  quantity: number,
}

const cookiesTable: CookieInstance[] = [
  { id: 1, name: 'Chocolate Chip', glutenFree: false, quantity: 6 },
  { id: 2, name: 'Oatmeal Raisin', glutenFree: true, quantity: 16 },
  { id: 3, name: 'Snickerdoodle', glutenFree: false, quantity: 7 },
]
