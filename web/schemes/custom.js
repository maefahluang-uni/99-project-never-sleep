import crypto from 'crypto-js'
import { LocalScheme } from '~auth/runtime'

const SECRET = 'secret'

export default class CustomScheme extends LocalScheme {
  async login(endpoint = {}) {
    const token = crypto.AES.encrypt(endpoint.username, SECRET).toString()
    await this.setUserToken(token)
  }

  setUserToken(token) {
    this.token.set(token)
    return this.fetchUser()
  }

  fetchUser() {
    try {
      const token = this.token.sync()
      if (!token) {
        throw new Error('User not found')
      }
      const payload = token.split('Bearer ')[1]
      const user = crypto.AES.decrypt(payload, SECRET).toString(crypto.enc.Utf8)
      this.$auth.setUser({ username: user })
    } catch (error) {
      this.$auth.callOnError(error, { method: 'fetchUser' })
      throw error
    }
  }

  logout() {
    return this.$auth.reset()
  }
}
