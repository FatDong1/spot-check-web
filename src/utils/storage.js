/**
 * storage.js
 * 提供web存储功能
 *  - 只使用sessionStorage
 */

class WebStoarge {
  constructor () {
    if (!window.sessionStorage) {
      console.warn('该浏览器不支持window.sessionStorage')
    }
    this.storage = {}
  }

  injection (name) {
    if (name && typeof name === 'string') {
      this.storage[name] = 'DOCUMENT-' + name.toUpperCase()
    }
  }

  get (name) {
    if (name in this.storage) {
      return window.sessionStorage.getItem(this.storage[name])
    }
    return ''
  }

  set (name, value) {
    if (name in this.storage) {
      window.sessionStorage.setItem(this.storage[name], value)
    }
  }

  remove (name) {
    if (name in this.storage) {
      window.sessionStorage.removeItem(this.storage[name])
    }
  }

  clear () {
    window.sessionStorage.clear()
  }
}

export default new WebStoarge()
