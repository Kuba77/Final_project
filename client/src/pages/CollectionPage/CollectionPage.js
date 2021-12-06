import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import classes from './CollectionPage.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import { getAllProducts } from "../../api/productsApi";
import CollectionList from './CollectionList/CollectionList';
import Pagination from './Pagination/Pagination'


const CollectionPage = () => {

    const [collection, setCollection] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsInPage] = useState(15);

    useEffect(() => {
        const getCollection = async () => {
          setLoading(true);
          const response = await getAllProducts();
          console.log(response);
          setCollection(response);
          setLoading(false);
        };
        getCollection();
      }, []);

    const lastProductIndex = currentPage * productsInPage;
    const firstProductIndex = lastProductIndex - productsInPage;
    const currentProduct = collection.slice(firstProductIndex, lastProductIndex);

    const paginate = (pageNumber, setLoading) => {

        setCurrentPage(pageNumber);
       
      };

    return (
        <>
            <Header />
            <section className={classes.collection}>
            {isLoading && (
                    <div className={classes.collection__loader}>
                        <PuffLoader loading={isLoading} color='purple' size={120}/>
                    </div>
                )}
            <div className={classes.collection__container}>
            {!isLoading && (
                <CollectionList collection={currentProduct}/> 
                )}
            </div>

            <Pagination
                productsInPage={productsInPage}
                totalProducts={collection.length}
                paginate={paginate}
            />
          
        </section>
        </>
    )
}

export default CollectionPage
