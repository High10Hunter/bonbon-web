import { Image, Layout, Menu, MenuRef } from 'antd'
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactWithChild } from 'src/interface/app'
import { SIDEBAR_OPTIONS } from 'src/shared/constant'
import { useResponsive } from 'src/shared/hook'
import PrivateLayoutNavbar from './PrivateLayoutNavbar'
import { Icon } from '@iconify/react'
import Logo from 'public/logo.png'

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
        <Layout.Sider width={200} collapsed={isCollapsed} collapsedWidth={60}>
          <Image src={Logo} preview={false} />
          <Menu
            className='pt-12'
            ref={inputRef}
            mode='inline'
            defaultSelectedKeys={['members']}
            selectedKeys={[selectedKey]}
            style={{ height: '100%', borderRight: 0 }}
            items={SIDEBAR_OPTIONS.map((item) => ({
              ...item,
              label: <Link to={item.path}>{item.label}</Link>,
              icon: <Icon icon={item.icon} />
            }))}
          />
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
