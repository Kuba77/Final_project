import React from 'react'
import classes from './Feature.module.scss'
import layout from '../../styles/layout/layout.module.scss'
import Carousel from './Carousel/Carousel'
import useWindowSize from '../../hooks/useWindowSize'

const Feature = () => {
    const size = useWindowSize()

    return (
        <section className={classes.feature}>
            <div className={layout.section}>
         
                <div className={classes.feature__container}>
                    {size.width > 768 && (
                        <>
                            <h2>Featured Manga</h2>
                            <Carousel/>
                        </>
                    )} 
            </div>
            </div>
        </section>
    )
}

export default Feature