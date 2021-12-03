import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";
import classes from './Main.module.scss'
import layout from '../../styles/layout/layout.module.scss'
import Button from '../Button/Button'
import { HiArrowSmRight } from 'react-icons/hi'


const Main = () => {
    const history = useHistory();
    const handleGoToProductsList = useCallback(() => {
        history.push('/products');
      }, [history]);

    return (
        <section className={classes.main}>
            <div className={layout.content__container}>
                <div className={classes.main__container}>
                    <h2>Find the best collection of Manga here</h2>
                    <Button type='main' size="m" onClick={handleGoToProductsList}>
                        {'Go to Collection'} 
                        <HiArrowSmRight size={25}/>
                    </Button>                    
                </div>
            </div>
        </section>
    )
}

export default Main
