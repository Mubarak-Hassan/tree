export default function Items({image,num}) {
  return (
    <>
      <div className="flex flex-col w-full my-16 mx-20 md:flex-row md:items-center md:justify-between md: ">
        <img src={image} alt="" className="w-1/2 mb-4 md:w-1/3" />
        <p>
          <span className="ml-28 bg-gray-400 rounded-3xl px-4 p-2 mr-7">{num}</span>
        </p>
        <div className="w-1/2 ">
          <h1 className="my-4 ml-11 font-bold md:text-xl">
            Add Your Shirt design
          </h1>
          <p className="text-sm w-[22rem] md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            omnis rem earum dignissimos ab, sit praesentium est recusandae, quo
            quis consectetur reiciendis laboriosam quod, necessitatibus libero
            adipisci illum. Commodi voluptate et atque doloribus debitis,
          </p>
        </div>
      </div>
    </>
  );
}
