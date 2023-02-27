import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Header from '../Header'

const Products = props => {
  const {history} = props
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return (
      <>
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </>
    )
  }
  return history.replace('/login')
}

export default withRouter(Products)
