import { Flex, Avatar } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import style from './HeaderChild.css';
import classNames from 'classnames/bind';
import Search from 'antd/es/input/Search';

const cx = classNames.bind(style);

function HeaderChild() {
    return (
        <Flex align="space-between" className={cx('flex_header')}>
            <div className={cx('box_title_header')}>
                <span className={cx('title_header')}>SHISUI</span>
            </div>
            <Search className={cx('searchInput')} placeholder="Tim sach ban thich " allowClear />
            <div className={cx('boxIcon_Header')}>
                <BellOutlined className={cx('BellOutlined')} />
                <Avatar className={cx('Avatar')} icon={<UserOutlined className={cx('IconAvatar')} />} />
            </div>
        </Flex>
    );
}

export default HeaderChild;
