import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Panel,Col } from 'rsuite';
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';


const Product = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        async function product(){
            const data = await axios.get("http://localhost:8000/product")
            setProduct(data.data)
        }
        product()
    },[])
  return (
    <>
        <Panel >
            {product.map(item=>(
                <Col xs={6} className='productcard'>
                    <img src={item.img} width="100%" alt="img" />
                    <div className='productbox'>
                        <div className='producticon'>
                            {item.rating >= 1 ? <BsStarFill className='staricon'/>:item.rating >= .5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                            {item.rating >= 2 ? <BsStarFill className='staricon'/>:item.rating >= 1.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                            {item.rating >= 3 ? <BsStarFill className='staricon'/>:item.rating >= 2.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                            {item.rating >= 4 ? <BsStarFill className='staricon'/>:item.rating >= 3.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                            {item.rating >= 5 ? <BsStarFill className='staricon'/>:item.rating >= 4.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                        </div>
                        <div className='brand'>
                            <p>{item.brand}</p>
                        </div>
                    </div>
                    <Panel>
                        <p className='productTitle'>{item.title}</p>
                        <p>
                            <div className='productbox'>
                                <div className='producticon'>
                                    {item.colors.map(items=>(
                                        <span className='productColors' style={{background: `#${items}`}}></span>
                                    ))}
                                </div>
                                <div className='productsize'>
                                    {item.sizes.map(items=>(
                                        <span className='productSizes'>{items}</span>
                                    ))}
                                </div>
                            </div>
                        </p>
                        <span className='productcart'>
                            <HiOutlineShoppingBag className='carticon'/>
                        </span>
                        <span className='price'>
                            $ {item.price}
                        </span>
                    </Panel>
                </Col>
            ))}
        </Panel>
    </>
  )
}

export default Product