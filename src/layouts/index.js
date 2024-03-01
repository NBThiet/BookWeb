import { Layout, Flex } from 'antd';
import style from './Layout.css';
import classNames from 'classnames/bind';
import HeaderChild from './HeaderChild';
import SiderChild from './SiderChild';
import Pages from '../pages';

const { Header, Sider, Content } = Layout;

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout className={cx('layout')}>
                <Header className={cx('headerStyle')}>
                    <HeaderChild />
                </Header>
                <Layout>
                    <Sider width="15%" className={cx('siderStyle')}>
                        <SiderChild />
                    </Sider>
                    <Content className={cx('contentStyle')}>
                        <Pages>{children}</Pages>
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    );
}

export default DefaultLayout;
