import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import './index.styl'
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Nav = () => {

  const navList = [
    {
      key: 1,
      title: 'Home',
      path: '/',
      icon: <PieChartOutlined />
    },
    {
      key: 2,
      title: 'Programes',
      path: '/Programes',
      icon: <DesktopOutlined />
    },
    {
      key: 3,
      title: 'Affiliates',
      path: '/Affiliates',
      icon: <ContainerOutlined />
    },
    {
      key: 'sub1',
      title: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: 5,
          title: 'Option 5',
          path: '/option5'
        },
        {
          key: 6,
          title: 'Option 6',
          path: '/option6'
        },
        {
          key: 7,
          title: 'Option 7',
          path: '/option7'
        },
      ]
    },
    {
      key: 'sub2',
      title: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 8,
          title: 'Option 8',
          path: '/option8'
        },
        {
          key: 9,
          title: 'Option 9',
          path: '/option9'
        },
        {
          key: 10,
          title: 'Option 10',
          path: '/option10'
        },
      ]
    }
  ]

  return (
    <div style={{ width: '100%' }}>
      <div className='logo'>
        <span>PXZ</span>
        <span>flatform</span>
      </div>
      <Menu
        defaultSelectedKeys={[]}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='light'
        className='nav'
      >
        
        {
          navList.map(item => {
            if (item.hasOwnProperty('children')) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.title}>
                  {
                    item.children.map(item2 => {
                      return (
                        <Menu.Item key={item2.key}>
                          <Link to={item2.path}>{item2.title}</Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  )
}

export default Nav
