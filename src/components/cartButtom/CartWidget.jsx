import React, { useContext } from "react"
import { CartContext} from "../../context/cartContext"

function CartWidget() {
  const{getTotalItemCount} = useContext(CartContext)
  return (
    <div className='cartWidget'>
      <button className='btnCart'>
        <svg width="35px" height="35px" strokeWidth={'1.47'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ background: 'rgb(33, 37, 41)'}}><path d="M19.26 9.696l1.385 9A2 2 0 0118.67 21H5.33a2 2 0 01-1.977-2.304l1.385-9A2 2 0 016.716 8h10.568a2 2 0 011.977 1.696zM14 5a2 2 0 10-4 0" stroke="#f5f5f5" strokeWidth={'1.30'} strokeLinecap={'round'} strokeLinejoin={'round'}></path></svg>
      </button>
      {getTotalItemCount() > 0 && <span className= 'number'> {getTotalItemCount()}</span>}
    </div>    
  )
}
export default CartWidget
