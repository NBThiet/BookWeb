import React, { useEffect, useState } from 'react';
import { Image, Button } from 'antd';
import style from './Home.css';
import classNames from 'classnames/bind';
import apiRequest from '../../api/apiRequest';

const cx = classNames.bind(style);

function Home() {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        apiRequest
            .get('books?_limit=20')
            .then((respon) => {
                setBookData(respon.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className={cx('flex_book_home')}>
            {bookData.map((data, index) => {
                return (
                    <div className={cx('book')} key={index}>
                        <Image className={cx('book_image')} src={data.image_url} />
                        <Button type="primary" size={30}>
                            READ
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
