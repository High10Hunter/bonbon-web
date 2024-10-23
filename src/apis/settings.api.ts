import { FixedIncomeUpdateBody, PersonalFinanceType } from 'src/types/settings.type'
import http from 'src/utils/http'

export const URL_GET_PERSONAL_FINANCE = '/settings/get_personal_finance'
export const URL_UPDATE_FIXED_INCOME = '/settings/fixed_income_update'

const settingsApi = {
  getPersonalFinance: () => {
    return http.get<PersonalFinanceType>(URL_GET_PERSONAL_FINANCE)
  },

  updateFixedIncome: (fixedIncomeUpdateBody: FixedIncomeUpdateBody) => {
    return http.put<{ fixed_income: number }>(URL_UPDATE_FIXED_INCOME, fixedIncomeUpdateBody)
  }
}

export default settingsApi
