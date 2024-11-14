import http from 'src/utils/http'

export const URL_GET_FINANCIAL_OVERVIEW = '/personal/financial-overview'
export const URL_GET_CATEGORY_DISTRIBUTION = '/personal/category-distribution'
export const URL_UPDATE_CATEGORY = '/personal/category/update'

const statisticsApi = {
  financialOverview(year: number) {
    return http.get(`${URL_GET_FINANCIAL_OVERVIEW}/${year}`)
  },
  categoryDistribution(startDate: Date, endDate: Date) {
    return http.get(`${URL_GET_CATEGORY_DISTRIBUTION}?start_date=${startDate}&end_date=${endDate}`)
  }
}

export default statisticsApi
