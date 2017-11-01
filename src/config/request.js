/**
 * location.config
 * 系统请求地址配置
 */

// 接口地址
const REQUEST_HEAD = 'http://xxx/api/v1/'

//黄彦扬的easymock地址前缀
const HYY_EASYMOCK = 'http://www.easy-mock.com/mock/59f6beb655aad24ebb7e6683/test/api/v1/'

// 请求url配置
const REQUEST_CONFIG = {}
// 登录获取权限
REQUEST_CONFIG['login'] = REQUEST_HEAD + 'login'
REQUEST_CONFIG['users'] = HYY_EASYMOCK + 'users'

// 获取文档内容
// REQUEST_CONFIG['doc'] = REQUEST_HEAD + 'doc'

export default REQUEST_CONFIG
