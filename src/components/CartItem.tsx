import { ItemType } from "../Constant"

interface Props {
  item: ItemType;
}
const CartItem = ({ item }: Props) => {
  return (
    <div className="flex hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50 space-x-2">
      <img className="h-24" src={item.src} />
      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400">{item.description}</div>
      </div>
      <div className="font-bold">{item.price}$</div>
    </div>
  )
}

export default CartItem