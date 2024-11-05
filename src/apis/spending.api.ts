import { SpendingDetail } from 'src/types/spending.type'
import http from 'src/utils/http'

export const URL_GET_SPENDINGS = '/personal/spending/list'
export const URL_ADD_SPENDING = '/personal/spending/create'
export const URL_UPDATE_SPENDING = '/personal/spending/update'
export const URL_DELETE_SPENDING = '/personal/spending/delete'
export const URL_BALANCE_OVERVIEW = '/personal/balance-overview'

const spendingApi = {
  getAllSpendings() {
    return http.get(URL_GET_SPENDINGS)
  },
  createSpending(spending: SpendingDetail) {
    return http.post(URL_ADD_SPENDING, spending)
  },
  updateSpending(id: number, spending: SpendingDetail) {
    return http.put(`${URL_UPDATE_SPENDING}/${id}`, spending)
  },
  deleteSpending(id: number) {
    return http.delete(`${URL_DELETE_SPENDING}/${id}`)
  },
  balanceOverview() {
    return http.get(URL_BALANCE_OVERVIEW)
  }
}

export default spendingApi
