import React, { useEffect, useState } from 'react';
import { Button, Carousel, Container } from 'rsuite';
import axios from 'axios';

const Banner = () => {

  const [banner, setBanner] = useState([])

    useEffect(async()=>{
      const data = await axios.get("http://localhost:8000/banner")
      setBanner(data.data)

    },[])

  return (
    <>

      <Carousel className="custom-slider">
        {banner.map(item=>(
          <div className='bannerImg'style={{backgroundImage: `url(${item.image})`}} >
            <Container className='container'>
              <div className='bannerContent'>
                <h4>{item.subheading}</h4>
                <h1>{item.heading}</h1>
                <Button color="violet" appearance="primary">{item.buttontext}</Button>
              </div>
            </Container>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default Banner
