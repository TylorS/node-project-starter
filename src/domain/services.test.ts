import { deepStrictEqual } from 'assert'

import { describe } from 'mocha'

import { createCoolThing } from './services'

// TODO: Test something actually useful!

describe(__filename, () => {
  describe(createCoolThing.name, () => {
    describe('given an ID', () => {
      it('returns a CoolThing with the expected ID', () => {
        const id = `${Math.random()}`

        deepStrictEqual(createCoolThing(id), { id })
      })
    })
  })
})
