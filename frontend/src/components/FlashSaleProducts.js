import React from "react";

const FlashSaleProducts = ({ products }) => {
    const flashSaleProducts = products.filter((product) => product.isFlashSale); // Fixed typo

    return (
        <div>
            <h3>Flash Sales</h3>
            <div className="row">
                {flashSaleProducts.map((product) => (
                    <div key={product.id} className="col-md-3">
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price: ${product.price}</p>
                                <p className="card-text">Discount: {product.discount}%</p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlashSaleProducts;
