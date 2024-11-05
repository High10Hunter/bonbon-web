import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import categoryApi from 'src/apis/category.api'
import { CategoryDetail } from 'src/types/category.type'

interface CategoryContextType {
  categoryList: CategoryDetail[]
  setCategoryList: React.Dispatch<React.SetStateAction<CategoryDetail[]>>
}

// Create context with default values
const CategoryContext = createContext<CategoryContextType>({ categoryList: [], setCategoryList: () => [] })

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryList, setCategoryList] = useState<CategoryDetail[]>([])

  useEffect(() => {
    console.log('Fetching categories...', categoryList)
    const fetchCategories = async () => {
      try {
        const response = await categoryApi.getAllCategories()
        const data = response.data
        setCategoryList(data['results'] || [])
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  }, [])

  return <CategoryContext.Provider value={{ categoryList, setCategoryList }}>{children}</CategoryContext.Provider>
}

// Custom hook to access the context easily
export const useCategory = () => {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider')
  }
  return context
}
