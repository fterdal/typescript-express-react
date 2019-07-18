interface CookieInstance {
  readonly id?: number
  name: string
  glutenFree: boolean
  quantity: number
}

export class Cookie {
  constructor() {
    // Here's some dummy data to start off with:
    this.cookies = [
      { id: 1, name: 'Chocolate Chip', glutenFree: false, quantity: 6 },
      { id: 2, name: 'Oatmeal Raisin', glutenFree: true, quantity: 16 },
      { id: 3, name: 'Snickerdoodle', glutenFree: false, quantity: 7 },
    ]
  }
  cookies: CookieInstance[]
  _nextId(): number {
    return (
      1 +
      this.cookies.reduce((highestId: number, obj: any) => {
        if (obj.id > highestId) return obj.id
        return highestId
      }, -Infinity)
    )
  }
  async findAll(): Promise<CookieInstance[]> {
    return Promise.resolve(this.cookies)
  }
  async create(cookie: CookieInstance): Promise<CookieInstance> {
    const newCookie = { ...cookie, id: this._nextId() }
    this.cookies.push(newCookie)
    return Promise.resolve(newCookie)
  }
  async findByPk(id: number): Promise<CookieInstance | null> {
    const found = this.cookies.find(cookie => cookie.id === id)
    if (found) return found
    return null
  }
}
