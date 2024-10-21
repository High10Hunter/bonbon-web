import React, { PropsWithChildren } from 'react'
import { cn, PropsWithClassName } from 'src/utils/tailwinds.util'

const VStack = ({ className, children }: PropsWithChildren<PropsWithClassName>) => {
  return <div className={`${cn(className)} flex flex-col`}>{children}</div>
}

export default VStack
