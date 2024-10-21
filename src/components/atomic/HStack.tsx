import React, { PropsWithChildren } from 'react'
import { cn, PropsWithClassName } from 'src/utils/tailwinds.util'

const HStack = ({ className, children }: PropsWithChildren<PropsWithClassName>) => {
  return <div className={`${cn(className)} flex flex-row`}>{children}</div>
}

export default HStack
