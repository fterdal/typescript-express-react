import { expect } from 'chai'

import { Cookie } from '../src/Cookie'

describe('Cookie Model', () => {
  let MyCookies = new Cookie()
  beforeEach(() => {
    MyCookies = new Cookie()
  })

  it('has some cookies', async () => {
    expect(await MyCookies.findAll()).to.be.an('array')
  })

  it('can create new cookies', async () => {
    const cookiesBefore = await MyCookies.findAll()
    const createdCookie = await MyCookies.create({
      name: 'brownie',
      glutenFree: false,
      quantity: 2,
    })
    const cookiesAfter = await MyCookies.findAll()
    expect(createdCookie.name).to.equal('brownie')
    expect(cookiesBefore.find(ck => ck.name === 'brownie')).to.equal(undefined)
    expect(cookiesAfter.find(ck => ck.name === 'brownie')).to.include({
      name: 'brownie',
      glutenFree: false,
      quantity: 2,
    })
  })

  it('can find cookies by primary key (pk)', async () => {
    expect(await MyCookies.findAll()).to.have.length(0)
    await MyCookies.create({
      name: 'chocolate chip',
      glutenFree: false,
      quantity: 3,
    })
    expect(await MyCookies.findAll()).to.have.length(1)
    const foundCookie = await MyCookies.findByPk(1)
    if (foundCookie === null) throw new Error(`Couldn't find the cookie`)
    expect(foundCookie).to.include({
      id: 1,
      name: 'chocolate chip',
      glutenFree: false,
      quantity: 3,
    })
  })

  it('can destroy by primary key (pk)', async () => {
    expect(await MyCookies.findAll()).to.have.length(0)
    await MyCookies.create({
      name: 'snickerdoodle',
      glutenFree: false,
      quantity: 5,
    })
    await MyCookies.create({
      name: 'macadamia nut',
      glutenFree: true,
      quantity: 13,
    })
    const snickerdoodle = await MyCookies.findByPk(1)
    if (snickerdoodle === null) throw new Error(`Couldn't find the cookie`)
    expect(snickerdoodle.id).to.equal(1)

    expect(await MyCookies.destroyByPk(1)).to.equal(true)
    const deletedSnickerdoodle = await MyCookies.findByPk(1)
    expect(deletedSnickerdoodle).to.equal(null)
    const macadamiaNut = await MyCookies.findByPk(2)
    if (macadamiaNut === null) {
      throw new Error(`Oh no! Deleted too many cookies!`)
    }
  })
})
