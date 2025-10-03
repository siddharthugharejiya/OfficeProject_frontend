import React, { useEffect } from 'react';
import { Product_Action } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css"
import Navbar_1 from './Navbar_1';
import Footer1 from './Footer1';
function ProductPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(Product_Action(id));
        }
    }, [id, dispatch]);

    const products = useSelector(state => state.Product_getting?.Product);
    console.log(products);
    const nav = useNavigate()

    const productList = products?.data || [];
    const handleSinglePageClick = (productId) => {
        nav(`/SinglePage/${productId}`);

    }

    return (
        <>
            <Navbar_1 />
            <div className='bg-[#F6F4F2] text-center py-10 text-[#514633] font-semibold text-md'>Home / Storage</div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Products</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                    {
                        productList.map((item) => (
                            <div
                                key={item._id}
                                className="card w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"
                                onClick={() => handleSinglePageClick(item._id)}
                            >
                                <div className="h-[350px] relative overflow-hidden w-full group">
                                    <img
                                        src={item.Image?.[0] || '/placeholder.png'}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />

                                </div>

                                <div className="card-body mt-4 p-2 text-center">
                                    <h2 className="card-title text-lg font-mono uppercase text-[14px] text-[#CE701F]">
                                        {item.name}
                                    </h2>
                                    <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px] hover:text-[#CE701F]">
                                        {item.category}
                                    </p>
                                </div>
                            </div>

                        ))}
                </div>
            </div>

            <Footer1 />
        </>

    );
}

export default ProductPage;
