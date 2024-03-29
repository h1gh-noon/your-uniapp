import request from '@/common/http'

const loginRequest = async code => {
  try {
    const res = await request.post('', {
      code
    })
    console.log(res)
    return res
  } catch (error) {
    return null
  }
}

/**
 * @description: 登录并缓存userInfo
 * @return {Object} userInfo
 */
export const login = () => {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin', //使用微信登录
      onlyAuthorize: true,
      success: async function ({ code }) {
        console.log('code', code)
        const token = await loginRequest(code)
        if (token) {
          uni.setStorageSync('token', token)
          resolve(token)
        } else {
          reject(null)
        }
        // uni.showToast({
        //   title: '登录成功！'
        // })
        // uni.setStorageSync('token', token)
      }
    })
  })
}
