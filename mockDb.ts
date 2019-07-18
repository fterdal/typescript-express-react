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
  private nextId(): number {
    return (
      1 +
      this.cookies.reduce((highestId: number, obj: any) => {
        if (obj.id > highestId) return obj.id
        return highestId
      }, -Infinity)
    )
  }
  async findAll(): Promise<CookieInstance[]> {
    return this.cookies
  }
  async create(cookie: CookieInstance): Promise<CookieInstance> {
    const newCookie = { ...cookie, id: this.nextId() }
    this.cookies.push(newCookie)
    return newCookie
  }
  async findByPk(id: number): Promise<CookieInstance | null> {
    const found = this.cookies.find(cookie => cookie.id === id)
    if (found) return found
    return null
  }
  async destroyByPk(id: number): Promise<boolean> {
    const found = this.cookies.find(cookie => cookie.id === id)
    if (!found) return false
    this.cookies = this.cookies.filter(cookie => cookie.id !== id)
    return true
  }
}
