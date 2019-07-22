import Cookie, { CookieInstance } from './Cookie'

export const fakeCookies: CookieInstance[] = [
  { name: 'chocolate chip', quantity: 11, glutenFree: false },
  { name: 'oreo', quantity: 4, glutenFree: true },
  { name: 'macadamia nut', quantity: 13, glutenFree: false },
  { name: 'double fudge', quantity: 24, glutenFree: false },
  { name: 'vanilla wafer', quantity: 16, glutenFree: true },
  { name: 'snickerdoodle', quantity: 8, glutenFree: true },
]

export const seedCookies = async (): Promise<void> => {
  console.log('seeding cookies...')
  const cookies = await Cookie.bulkCreate(fakeCookies)
  console.log(`seeded ${cookies.length} cookies`)
}
