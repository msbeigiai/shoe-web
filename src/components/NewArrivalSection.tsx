import { ItemType } from "../Constant"
import Card from "./Card";

interface Props {
  items: ItemType[];
  onClickCard: (item: ItemType) => void;
}

const NewArrivalSection = ({ items, onClickCard }: Props) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,30%)]">
        {items.map(item => <Card key={item.id} item={item} onClick={onClickCard} />)}
      </div>
    </div>
  )
}

export default NewArrivalSection