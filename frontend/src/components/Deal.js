import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Grid, Row, Col, Button } from 'rsuite'

const Deal = () => {

    const [deal, setDeal] = useState([])

    useEffect(async()=>{
        const data = await axios.get("http://localhost:8000/deal")
        setDeal(data.data)
    },[])

  return (
    <>
        <Container className='container deal-part'>
            <Grid >
                <Row gutter={30}>
                    {deal.map((item, index)=>(
                        <Col xs={12}>
                            <div className='dealBox' style={{backgroundImage: `url(${item.img})`}}>
                                <div className='dealContent'>
                                    <h5>{item.subheading}</h5>
                                    <h2>{item.heading}</h2>
                                    <Button className={`dealbtn${index}`}>{item.button}</Button>
                                </div>
                            </div>    
                        </Col>
                    ))}
                </Row>
            </Grid>
        </Container>
    </>
  )
}

export default Deal
