import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import Nav from './aside'
import Routers from './router/router'
import './App.css'

const { Sider, Content } = Layout

function App() {
  return (
    <>
      <Layout>
        <Router>
            <Sider theme='light' width='250'>
              <Nav />
            </Sider>
            <Content>
              <Routers />
            </Content>
        </Router>
      </Layout>
    </>
  )
}

export default App;
