import axois from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axois.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '67c9ae58d2d24d90b361c1f604670ac8'
  }
})