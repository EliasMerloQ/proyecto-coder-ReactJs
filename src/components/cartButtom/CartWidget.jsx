import { BsFillCartFill } from 'react-icons/bs';
import "./CartWidgetStyle.scss"

function Cart() {
  return (
    <div className='cartContainer'>
      <BsFillCartFill color='white'  className='cartIcon'/>
      <span class='badge badge-warning' id='lblCartCount'> 5 </span>
    </div>    
  )
}
export default Cart
