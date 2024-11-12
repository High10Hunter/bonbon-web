import { faEllipsisV, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { SpendingDetail } from 'src/types/spending.type'
import { convertCurrencyToSymbol, formatNumberWithLocale } from 'src/utils/tools'
import { IFormModalRef } from 'src/components/common/FormModal'
import { Form, FormInstance } from 'antd/lib'
import { CategoryIcon } from 'src/shared/constant'
import SpendingForm from './SpendingForm'

interface Props {
  spending: SpendingDetail
  onDeleteSpending: (spending: SpendingDetail) => void
  onUpdateSpending: (id: number, spending: SpendingDetail) => void
}

export default function Spending({ spending, onDeleteSpending, onUpdateSpending }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [form] = Form.useForm()
  const modalRef = useRef<IFormModalRef>(null)

  const useFieldValue = (fieldName: string, form: FormInstance) => {
    return Form.useWatch(fieldName, form)
  }

  const newSpending = {
    id: Date.now(),
    name: useFieldValue('name', form),
    amount: useFieldValue('amount', form),
    currency: useFieldValue('currency', form),
    time: useFieldValue('time', form)?.format('YYYY-MM-DD'),
    type: useFieldValue('type', form),
    category_id: useFieldValue('category', form)
  }

  const handleUpdateSpending = () => {
    onUpdateSpending(spending.id, newSpending)
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <li className='relative my-3 grid grid-cols-9 items-center rounded-2xl border-none bg-green-400 p-5 text-xl'>
      <FontAwesomeIcon
        icon={CategoryIcon.find((item) => item.name === spending.category_icon)?.icon || faXmark}
        size='2x'
      />
      <span className='col-span-3 truncate text-2xl font-bold'>{spending.name}</span>
      <span className='col-span-2 truncate text-center italic text-gray-500'>{spending.time.toLocaleString()}</span>
      <span className='col-span-2 truncate text-center font-bold'>
        {spending.type === 'INCOME' ? '+' : '-'}
        {`${formatNumberWithLocale(spending.amount)}${convertCurrencyToSymbol(spending.currency)}`}
      </span>
      <div
        className='relative col-span-1 text-right hover:cursor-pointer'
        onMouseEnter={toggleMenu}
        onMouseLeave={toggleMenu}
      >
        <SpendingForm
          title='Edit transaction'
          modalRef={modalRef}
          form={form}
          formData={spending}
          handleCancel={modalRef.current?.closeModal}
          handleSubmit={handleUpdateSpending}
        />
        <FontAwesomeIcon icon={faEllipsisV} size='lg' className='hover:cursor-pointer' onClick={toggleMenu} />
        {isMenuOpen && (
          <div
            className='absolute right-0 top-2 z-10 mt-2 w-36 rounded-md bg-white p-2 shadow-lg'
            role='menu'
            tabIndex={0}
          >
            <ul>
              <li className='cursor-pointer p-2 hover:bg-gray-200'>
                <button
                  className='w-full cursor-pointer border-none bg-inherit text-left text-xl'
                  onClick={modalRef.current?.showModal}
                >
                  Edit
                </button>
              </li>
              <li className='cursor-pointer p-2 hover:bg-gray-200'>
                <button
                  className='w-full cursor-pointer border-none bg-inherit text-left text-xl'
                  onClick={() => onDeleteSpending(spending)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </li>
  )
}
