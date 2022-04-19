import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Panel,Col } from 'rsuite';
import ReactStars from "react-rating-stars-component";


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
                <Col xs={6}>
                    <img src={item.img} width="100%" alt="" />
                    <Panel>
                        <ReactStars
                            count={5}
                            size={24}
                            isHalf={true}
                            activeColor="#ffd700"
                            value={item.rating}
                            edit={false}
                        />
                        <p>
                            <small>
                                {item.title}
                            </small>
                        </p>
                        <p>
                            <small>
                                {item.color}
                            </small>
                        </p>
                    </Panel>
                </Col>
            ))}
        </Panel>
    </>
  )
}

export default Product