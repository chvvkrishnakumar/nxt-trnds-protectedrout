import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Header from '../Header'

const Cart = props => {
  const {history} = props
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return (
      <>
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </>
    )
  }
  return history.replace('/login')
}

export default withRouter(Cart)
