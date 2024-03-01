import React, { useState } from 'react';
import style from './SiderChild.css';
import classNames from 'classnames/bind';
import { ReadOutlined, SwitcherOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import routes from '../../config/routes';
function getItem(label, key, icon, link, children, type) {
    return {
        key,
        icon,
        link,
        children,
        label,
        type,
    };
}

const cx = classNames.bind(style);

const items = [
    getItem('HOME', '1', <HomeOutlined />, <NavLink to={routes.home} />),
    getItem('LIBRARY', '2', <SwitcherOutlined />, <NavLink to={routes.library} />),
    getItem('MY BOOK', '3', <ReadOutlined />),
];

console.log(items);
function SiderChild() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className={cx('boxSider')}>
            {/* <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            <Menu
                className={cx('menuSider')}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={true}
                items={items}
                link={items.link}
            />
        </div>
    );
}
export default SiderChild;
