const ShoeDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="flex-1 ">Image</div>
      <div className="flex-1 ">
        <div className="text-5xl font-black md:text-9xl">
          Nike Air max 270
        </div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient"
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">
          100 $
        </div>
        <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">Add to bag</button>
        <a href="#" className="text-lg font-bold underline underline-offset-4">
          View details
        </a>
      </div>

    </div>
  );
};

export default ShoeDetails;
