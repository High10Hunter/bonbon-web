import { CategoryDetail } from 'src/types/category.type'
import http from 'src/utils/http'

export const URL_GET_CATEGORY = '/personal/category/list'
export const URL_CREATE_CATEGORY = '/personal/category/create'
export const URL_UPDATE_CATEGORY = '/personal/category/update'

const categoryApi = {
  getAllCategories() {
    return http.get(URL_GET_CATEGORY)
  },
  createCategory(category: CategoryDetail) {
    return http.post(URL_CREATE_CATEGORY, category)
  },
  updateCategory(id: number, category: CategoryDetail) {
    return http.put(`${URL_UPDATE_CATEGORY}/${id}`, category)
  }
}

export default categoryApi
