import React, { PropsWithChildren } from 'react'

export default function Flex({ children }: PropsWithChildren) {
  return <div className='flex'>{children}</div>
}
