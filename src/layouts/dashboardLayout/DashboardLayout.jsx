import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { items } from '../../helpers/MenuList';
import MainLogo from '../../icons/MainLogo';
import sidebarCloseBtn from'../../assets/angle-double.png';
import { useSelector } from 'react-redux';
import MainLogoWithoutPath from '../../icons/MainLogoWithoutPath';

const { Sider } = Layout;

const renderMenuItems = (menuItems) => {
  return menuItems.map((item) => {
    if (item.children) {
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        children: item.children.map((child) => ({
          key: child.key,
          icon: child.icon,
          label: <Link to={`/${child.key}`}>{child.label}</Link>,
        })),
      };
    }
    return {
      key: item.key,
      icon: item.icon,
      label: <Link to={`/${item.key}`}>{item.label}</Link>,
    };
  });
};

const DashboardLayout = () => {

  const token  = useSelector((state) => state.auth.token);

  const [collapsed, setCollapsed] = useState(false);

  if (token === null) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return (
    <div className='site-wraper'>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)} 
        className='aside-main' 
        width={300}
        breakpoint="md"
      >
        <div className="demo-logo-vertical">
          {
            collapsed ? <MainLogoWithoutPath /> : <MainLogo />
          }
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['dashboard/home']}
          mode="inline"
          items={renderMenuItems(items)}
        />
        <div className='sidebar-close-btn'>
            <button onClick={() => setCollapsed(!collapsed)}>
              <img src={sidebarCloseBtn} alt="" />
            </button>
        </div>
      </Sider>
      <main className="site-main">
          <header className="main-header">
              
          </header>
          <div className='main-body'>
              <Outlet />
          </div>
      </main>
    </div>
  )
}

export default DashboardLayout