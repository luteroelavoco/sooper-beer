import {api} from './api'

export async function getBeers(page: number, beer_name: string) {
  const { data } = await api.get('/beers', {
    params: {
      per_page: 18,
      page,
      beer_name
    }
  })
  return {
    beers: data,
  }
}
