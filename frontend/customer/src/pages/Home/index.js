import React from 'react';

import headerImage from '../../assets/images/Home/header.png';

import classes from './Home.module.css';
import SearchTicket from '../../components/Home/SearchTicket';
import HotTrip from '../../components/Home/HotTrip';

const Home = () => {
    return <>
        <header>
            <img className={classes.header_image} src='https://th.bing.com/th/id/R.71dd55017baea53642b1351f8a0d540c?rik=dP%2bHj%2fjqyWjggQ&pid=ImgRaw&r=0' alt='header' />
        </header>
        <main className={classes.main}>
            <SearchTicket />
            <HotTrip />
        </main>
    </>
}

export default Home;