import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Feature from '../../components/Feature/Feature';
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer';



const HomePage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Feature />
            <Categories />
            <Footer />
        </>
    )
}

export default HomePage
