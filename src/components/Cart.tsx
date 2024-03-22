import { ItemType } from "../Constant"
import CartItem from "./CartItem";

export interface FakeCart {
  product: ItemType;
  qty: number;
  size: number;
}

interface Props {
  cartItems: FakeCart[];
  onClickTrash: (productId: number) => void;
}

const Cart = ({ cartItems, onClickTrash }: Props) => {
  return (
    <div>
      <h2 className='dark:text-white text-4xl font-bold mb-5'>Cart</h2>
      <ul className="space-y-5">
        {cartItems.map(cartItem =>
          <li key={cartItem.product.id}><CartItem item={cartItem} onClickTrash={onClickTrash} /></li>)
        }
      </ul>
    </div>
  )
}

export default Cart