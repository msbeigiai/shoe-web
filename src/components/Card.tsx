import { ItemType } from "../Constant"

interface Props {
  item: ItemType;
  onClick: (item: ItemType) => void;
}


const Card = ({ item, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} max-w-xl transform transition hover:scale-105 cursor-pointer`}>
      <div className="p-8">
        <div className="text-2xl font-bold">
          {item.title}
        </div>
        <div className="underline underline-offset-4 font-semibold mt-10">SHOP NOW +</div>
      </div>
      <img className="absolute h-40 w-56 top-5 left-[40%]" src={item.src} />
    </div>
  )
}

export default Card