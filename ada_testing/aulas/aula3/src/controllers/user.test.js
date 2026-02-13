import {jest} from '@jest/globals'
import { getUsers } from '../controllers/user.controller'
import { runServer } from '../index.js'

import { users } from '../controllers/user.controller.js'

beforeAll(() => {
    runServer()
})

test('should send array of users', async () => {
    const req = {}
    const res = { json: jest.fn() }
    await getUsers(req, res)
    expect(res.json).toBeCalledTimes(1)
    expect(res.json).not.toBeCalledTimes(2)
    expect(res.json).toHaveBeenCalledWith(users)
 })