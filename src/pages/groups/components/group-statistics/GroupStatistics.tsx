import { Dispatch, SetStateAction } from 'react'
import EventStatistics from './EventStatistics'
import TotalMemberSpending from './TotalMemberSpending'

interface Props {
  groupId?: string
  setSelectedEventId: Dispatch<SetStateAction<number>>
}

export default function GroupStatistics({ groupId, setSelectedEventId }: Props) {
  return (
    <div className='scrollbar-hide m-1 grid min-h-full grid-cols-12 gap-5 overflow-y-auto rounded-2xl bg-white p-5 py-2'>
      <div className='col-span-6 flex h-full w-full flex-col gap-3'>
        <TotalMemberSpending groupId={groupId} />
      </div>

      <div className='col-span-6'>
        <div className='h-full w-full'>
          <EventStatistics setSelectedEventId={setSelectedEventId} />
        </div>
      </div>
    </div>
  )
}
