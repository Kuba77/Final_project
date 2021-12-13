import React from 'react'
import classes from './Feature.module.scss'
import layout from '../../styles/layout/layout.module.scss'
import Carousel from './Carousel/Carousel'

const Feature = () => {
  

    return (
        <section className={classes.feature}>
            <div className={layout.section}>
            
                <div className={classes.feature__container}>
                        <>
                        <h2>Featured Manga</h2>
                            <Carousel/>
                        </>
            </div>
            </div>
        </section>
    )
}

export default Feature