import { Layout, MenuRef } from 'antd'
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactWithChild } from 'src/interface/app'
import { SIDEBAR_OPTIONS } from 'src/shared/constant'
import { useResponsive } from 'src/shared/hook'
import PrivateLayoutNavbar from './PrivateLayoutNavbar'
import PrivateLayoutSidebar from './PrivateLayoutSidebar'

export default function PrivateLayout({ children }: ReactWithChild) {
  const location = useLocation()
  const { isDesktop } = useResponsive()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string>(
    (SIDEBAR_OPTIONS.find((_item) => location.pathname.startsWith(_item.path))?.key as string) || 'members'
  )

  useEffect(() => {
    setIsCollapsed(!isDesktop)
  }, [isDesktop])

  useEffect(() => {
    const key = SIDEBAR_OPTIONS.find((_item) => location.pathname.startsWith(_item.path))?.key as string
    if (key) setSelectedKey(key)
  }, [location])

  const inputRef = useRef<MenuRef>(null)

  useEffect(() => {
    const input = inputRef.current
    if (input) {
      input.focus()
    }
  }, [])

  return (
    <Layout className='min-h-screen'>
      <Layout>
        <Layout.Sider className='flex w-full flex-col' width={200} collapsed={isCollapsed} collapsedWidth={60}>
          <PrivateLayoutSidebar isCollapsed={isCollapsed} />
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{ margin: 0, minHeight: 280 }}>
            <PrivateLayoutNavbar />
            <ContentWrapper>{children}</ContentWrapper>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className='p-4'>{children}</div>
}
