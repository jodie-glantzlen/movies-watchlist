import request from 'superagent'

const baseUrl = 'https://imdb-api.com/en/API/SearchMovie'
const KEY = process.env.IMDB_KEY

export function searchForMovie(str) {
  return request.get(`${baseUrl}/${KEY}/${str}`)
  .then(res => res.body.results)
}