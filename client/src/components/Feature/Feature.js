import React, { useEffect, useState }from 'react'
import classes from './Feature.module.scss'
import layout from '../../styles/layout/layout.module.scss'
import Carousel from './Carousel/Carousel'
import { getAllProducts } from "../../services/products";
import PuffLoader from "react-spinners/PuffLoader";


const Feature = () => {
    const [feature, setFeature] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getCollection = async () => {
        setLoading(true);
        const response = await getAllProducts();
        const featureList = response.slice(response.length - 7, response.length)
        setFeature(featureList);
        setLoading(false);
      };
      useEffect(() => {
        getCollection();
      }, []);



    return (
        <section className={classes.feature}>
            <div className={layout.section}>
            
                <div className={classes.feature__container}>
                    <>
                        <h2>Featured Manga</h2>
                        {isLoading && (
                           <div className={classes.feature__loading}>
                                <PuffLoader loading={isLoading} color="purple" size={120} />
                            </div>
                            )}
                        {!isLoading && <Carousel
                            feature={feature}
                            isLoading={isLoading}
                        />} 
                    </>
            </div>
            </div>
        </section>
    )
}

export default Feature