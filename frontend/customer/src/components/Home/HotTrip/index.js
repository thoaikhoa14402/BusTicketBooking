import React from 'react';

import classes from './HotTrip.module.css';
import TripCard from '../TripCard';

import RGImg from '../../../assets/images/Trip/RG.png';
import CTImg from '../../../assets/images/Trip/CT.png';
import BTImg from '../../../assets/images/Trip/BT.png';
import CMImg from '../../../assets/images/Trip/CM.png';
import CDImg from '../../../assets/images/Trip/CD.png';
import BLImg from '../../../assets/images/Trip/BL.png';

const HotTrip = () => {

    const trip_list = [
        {
            img: RGImg,
            title: 'Sài gòn - Rạch giá',
            distance: 235,
            duration: 8,
            price: 190000
        },
        {
            img: CTImg,
            title: 'Sài gòn - Cần thơ',
            distance: 190,
            duration: 4,
            price: 165000
        },
        {
            img: BTImg,
            title: 'Sài gòn - Bến tre',
            distance: 75,
            duration: 3,
            price: 90000
        },
        {
            img: CMImg,
            title: 'Sài gòn - Cà mau',
            distance: 357,
            duration: 8,
            price: 230000
        },
        {
            img: CDImg,
            title: 'Sài gòn - Châu đốc',
            distance: 240,
            duration: 6,
            price: 175000
        },
        {
            img: BLImg,
            title: 'Sài gòn - Bạc liêu',
            distance: 280,
            duration: 7,
            price: 190000
        },
    ]

    return (
        <div className={classes.hot_trip_container}>
            <div className={classes.hot_trip_main}>
                <h1 className={classes.title}>Các tuyến xe nổi bật</h1>
                <div className={classes.hot_trip_wrapper}>
                    {trip_list.map((item) => <TripCard trip={item} /> )}
                </div>
            </div>
        </div>
    );
};

export default HotTrip;