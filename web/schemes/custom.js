import crypto from 'crypto-js'
import { LocalScheme } from '~auth/runtime'

const SECRET = 'secret'

export default class CustomScheme extends LocalScheme {
  async login(endpoint = {}) {
    const payload = {
      username: endpoint.data.username,
    }
    const token = crypto.AES.encrypt(JSON.stringify(payload), SECRET).toString()
    await this.setUserToken(token)
    this.$auth.redirect('home')
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
      if (!user) {
        throw new Error('User not found')
      }
      this.$auth.setUser(JSON.parse(user))
    } catch (error) {
      this.$auth.callOnError(error, { method: 'fetchUser' })
      throw error
    }
  }

  async logout() {
    const result = await this.$auth.reset()
    this.$auth.redirect('login')
    return result
  }
}
