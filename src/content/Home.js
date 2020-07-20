import React from 'react'
import { Row, Col } from 'antd'
import '../assets/css/home.styl'

const Option1 = () => {
  return (
    <>
      <Row>
        <Col span={3} offset={18}>
          <div className='talkBox'>
            <img src={require('../assets/images/talk.png')} />
          </div>
        </Col>
        <Col span={3}>456</Col>
      </Row>
    </>
  )
}

export default Option1
