import './_product.scss';

const Product = () => {
    const productData = [
        { pName: "Boots", pPrice: "$500", img: "boots.jpg" },
        { pName: "Purse", pPrice: "$300", img: "fancypurse.jpg" },
        { pName: "Jacket", pPrice: "$400", img: "jacket.jpg" },
        { pName: "Jacket", pPrice: "$250", img: "newjacket.jpg" },
        { pName: "Jacket", pPrice: "$200", img: "peachjacket.jpg" },
        { pName: "Pursenew", pPrice: "$200", img: "purse.jpg" },
        { pName: "Handbag", pPrice: "$20", img: "handbag.jpg" }
    ];

    return (
        <div className='product-container'>
            {productData.map((product, key) => (
                <div className='product-card' key={key}>
                    <div className='product-image-container'>
                        <img src={require('../../../src/assets/images/shop/' + product.img)} alt={product.pName} />
                    </div>
                    <div className='product-info'>
                        <h5><a href='#'>{product.pName}</a></h5>
                        <p className='product-price'>{product.pPrice}</p>
                        <div className='product-rating'>
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
