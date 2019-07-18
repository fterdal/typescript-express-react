export interface CookieInstance {
  readonly id?: number
  name: string
  glutenFree: boolean
  quantity: number
}

// Named export for testing purposes
export class Cookie {
  constructor() {
    this.cookies = []
  }
  cookies: CookieInstance[]

  private nextId(): number {
    if (!this.cookies.length) return 1
    return (
      1 +
      this.cookies.reduce((highestId: number, obj: any) => {
        if (obj.id > highestId) return obj.id
        return highestId
      }, -Infinity)
    )
  }

  async findAll(): Promise<CookieInstance[]> {
    return [...this.cookies]
  }

  async create(cookie: CookieInstance): Promise<CookieInstance> {
    const newCookie = { ...cookie, id: this.nextId() }
    this.cookies.push(newCookie)
    return newCookie
  }

  // TODO: Test this
  async bulkCreate(cookies: CookieInstance[]): Promise<CookieInstance[]> {
    return Promise.all(cookies.map(cookie => this.create(cookie)))
  }

  async findByPk(id: number): Promise<CookieInstance | null> {
    const found = this.cookies.find(cookie => cookie.id === id)
    if (found) return { ...found }
    return null
  }

  async destroyByPk(id: number): Promise<boolean> {
    const found = this.cookies.find(cookie => cookie.id === id)
    if (!found) return false
    this.cookies = this.cookies.filter(cookie => cookie.id !== id)
    return true
  }

  // TODO: Test this
  async editByPk(
    id: number,
    updates: CookieInstance
  ): Promise<CookieInstance | null> {
    const cookieToEdit = await this.findByPk(id)
    if (cookieToEdit === null) return null

    this.cookies = this.cookies.map(cookie => {
      if (cookie.id !== id) return cookie
      return { ...cookie, ...updates }
    })
    return this.findByPk(id)
  }
}

// Default export for use by the server
export default new Cookie()
