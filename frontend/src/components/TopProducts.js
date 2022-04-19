import React from 'react'
import { Col, Container, Row,Grid } from 'rsuite'
import Product from './Product'

const TopProducts = () => {
  return (
    <>
      <Container className='topproduct'>
        <Grid >
          <Row className="show-grid" gutter={30}>
            <Col xs={12}>
              <h2>Top Products</h2>
            </Col>
            <Col xs={12}>
              <ul>
                <li> <span></span> All</li>
                <li> <span></span> Boys Collection</li>
                <li> <span></span> Girl Collection</li>
                <li> <span></span> Shose Collection</li>
              </ul>  
            </Col>
          </Row>
        </Grid>
        {/* product components start */}
        <Grid >
          <Row className="show-grid" gutter={30}>
              <Product />
          </Row>
        </Grid>
        {/* product components end */}
      </Container>
    </>
  )
}

export default TopProducts