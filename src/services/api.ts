import axios from 'axios'

export const url: string = 'https://api.punkapi.com/v2/'

export const api = axios.create({
  baseURL: url
})
