import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Reducers/actions/categoriesActions';
import { fetchProducts } from '../Reducers/actions/productsActions';
import CategoryList from '../components/CategoryList';
import FlashSaleProducts from '../components/FlashSaleProducts';
import TopSellingProducts from '../components/TopSellingProducts'; // Fixed typo
import CategoryProducts from '../components/CategoryProducts';

const HomePage = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchCategories()); // Fixed typo
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {/* First row for listing categories and flash sales */}
            <div className="row">
                <div className="col-md-3">
                    <CategoryList categories={categories} />
                </div>
                <div className="col-md-9">
                    <FlashSaleProducts products={products} />
                </div>
            </div>

            {/* Second row for top selling products */}
            <div className="row">
                <TopSellingProducts products={products} /> {/* Fixed typo */}
            </div>

            {/* Third, fourth, and fifth rows for category products */}
            {categories.map((category) => (
                <div key={category.id} className="row">
                    <CategoryProducts category={category} products={products} /> {/* Fixed typo */}
                </div>
            ))}
        </>
    );
};

export default HomePage;
