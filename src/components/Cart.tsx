import { ItemType } from "../Constant"
import CartItem from "./CartItem";

export interface FakeCart {
  product: ItemType;
  qty: number;
  size: number;
}

interface Props {
  cartItems: FakeCart[];
}

const Cart = ({ cartItems }: Props) => {
  return (
    <div>
      <h2 className='dark:text-white text-4xl font-bold mb-5'>Cart</h2>
      <ul className="space-y-5">
        {cartItems.map(cartItem =>
          <li key={cartItem.product.id}><CartItem item={cartItem} /></li>)
        }
      </ul>
    </div>
  )
}

export default Cart