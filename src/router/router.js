import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../content/Home'
import Programes from '../content/Programes'
import Affiliates from '../content/Affiliates'

export default () => {
  return (
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/Programes' component={Programes} />
      <Route path='/Affiliates' component={Affiliates} />
    </div>
  )
}