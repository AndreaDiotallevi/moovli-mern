const request = require('supertest')
const app = require('../index')

describe('Get list', () => {
  it('should get the list', async () => {
    const res = await request(app)
      .get('/api/getList')
      expect(res.statusCode).toEqual(200)
      expect(res.text).toBe(JSON.stringify(["item1", "item2", "item3"]))
  })
})