import fetch from 'isomorphic-fetch'

export default () => {
  return new Promise((resolve, reject) => {
    fetch((process.env.NODE_ENV === 'development')
      ? process.env.APP_API_A
      : `data-a.${__webpack_hash__}.json`,
      { method: 'GET' })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}