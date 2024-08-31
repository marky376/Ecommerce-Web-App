import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProducts = ({ category, products }) => {
    const categoryProducts = products.filter(
        (product) => product.category.id === category.id
    );

    return (
        <>
            <h3>{category.name}</h3>
            <div id={`category-${category.id}`} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {categoryProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <div className="card">
                                <img src={product.image} alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <p className="card-text">Stock: {product.stock}</p>
                                    <Link to={`/products/${product.slug}`} className="btn btn-primary">
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href={`#category-${category.id}`} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#category-${category.id}`} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default CategoryProducts;
