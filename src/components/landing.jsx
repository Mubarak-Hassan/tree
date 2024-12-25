import Items from "./items";
export default function Landing() {
  return (
    <section>
      <div className=" text-center items-center space-y-1">
        <h1 className="font-semibold text-2xl">How to create Custom shirts</h1>
        <div className="text-gray-500">
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            corporis!
          </p>
          <p>
            Lorem ipsum dolor sit amet.sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>

      <Items image="src/assets/Main.png" num="1" />
      <div className=" flex flex-col md:flex-row md:items-center md:justify-between  mx-20 ">
        <div className=" md:w-1/2">
          <h1 className="font-bold ml-10 mb-3 text-sm md:text-lg">
            Custom Artwork & Review
          </h1>
          <p className="text-sm w-[24rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            omnis rem earum dignissimos ab, sit praesentium est recusandae, quo
            quis consectetur reiciendis laboriosam quod, necessitatibus libero
            adipisci illum. Commodi voluptate et atque doloribus debitis,
          </p>
        </div>
        <p className="my-8 ml-28 w-[26rem]">
          <span className="  bg-gray-400 rounded-3xl px-4 p-2  ">2</span>
        </p>
        <img src="src/assets/Main-2.png" alt="" className="md:w-1/3 w-64" />
      </div>
      <Items image="src/assets/Main-1.png" num="3" />
    </section>
  );
}
