const MenuContainer: React.FC = () => {
  const foodMenu = [
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menuImg1.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menuImg2.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menuImg3.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Chicken & Ribs Combo",
      price: "89.24",
      served: "496",
      image: "/images/menu6.jpg",
    },
  ];
  return (
    <section
      className="shadow-md flex flex-col rounded-md bg-white mt-5 w-full p-3 xl:p-5 pb-14 xl:mb-0"
      style={{ borderRadius: 6 }}
    >
      <div className="flex flex-col gap-y-2 border-b">
        <h3 className="px-2 font-[inter] text-[#081735] font-bold text-lg">
          Menu
        </h3>
        <div className="flex items-center justify-end px-2 xl:px-5">
          <ul className="flex items-center mt-2 xl:mt-0 gap-x-5 font-[inter] overflow-x-auto">
            <li className="cursor-pointer text-chucky-primary font-medium border-b-2 border-chucky-primary pb-3 transition ease-in-out shrink-0">
              All Categories
            </li>
            <li className="cursor-pointer hover:text-chucky-primary text-chucky-gray-400 font-medium border-b-2 hover:border-chucky-primary pb-3 transition ease-in-out shrink-0">
              Breakfast
            </li>
            <li className="cursor-pointer hover:text-chucky-primary text-chucky-gray-400 font-medium border-b-2 hover:border-chucky-primary pb-3 transition ease-in-out shrink-0">
              Lunch
            </li>
            <li className="cursor-pointer hover:text-chucky-primary text-chucky-gray-400 font-medium border-b-2 hover:border-chucky-primary pb-3 transition ease-in-out shrink-0">
              Dinner
            </li>
          </ul>
        </div>
      </div>
      <div className="flex overflow-x-auto xl:overflow-x-hidden w-full gap-x-3 gap-y-5 mt-5">
        <div
          className="xl:basis-[65%] object-contain bg-cover bg-center bg-no-repeat bg-[url('/images/menu1.jpg')] rounded-md min-h-[240px] xl:min-h-[350px] p-2 xl:p-3 w-[258px] xl:w-full flex items-end xl:shrink shrink-0"
          style={{ borderRadius: 6 }}
        >
          <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full" style={{ borderRadius: 6 }}>
            <div>
              <h5 className="font-[inter] font-medium text-[12px] text-[#1E293B]">
                Shaking Beef Tri-Tip
              </h5>
              <span className="font-[inter] font-normal text-[11px] text-chucky-gray-100">
                456 served
              </span>
            </div>
            <div>
              <p className={`font-[inter] font-medium text-[12px] text-[#1E293B]`}>
                $69.47
              </p>
            </div>
          </div>
        </div>
        <div className="xl:basis-[35%] object-contain bg-cover bg-center bg-no-repeat bg-[url('/images/menu2.jpg')] rounded-md min-h-[240px] xl:min-h-[350px] p-2 xl:p-3 flex items-end w-[258px] xl:w-full xl:shrink shrink-0" style={{ borderRadius: 6 }}>
          <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full" style={{ borderRadius: 6 }}>
            <div>
              <h5 className="font-[inter] font-medium text-[12px] text-[#1E293B]">
                Shaking Beef Tri-Tip
              </h5>
              <span className="font-[inter] font-normal text-[11px] text-chucky-gray-100">
                456 served
              </span>
            </div>
            <div>
              <p className={`font-[inter] font-medium text-[12px] text-[#1E293B]`}>
                $69.47
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 xl:grid-cols-4 gap-x-5 mt-5 w-full">
        {foodMenu.map((food) => (
          <div
            className="object-contain bg-cover bg-center bg-no-repeat rounded-md h-[240px] p-3 flex items-end"
            key={food.id}
            style={{ backgroundImage: `url(${food.image})`, borderRadius: 6 }}
          >
            <div className="border rounded-md border-white p-3 flex justify-between  bg-white/50 backdrop-blur-md border-white/20 shadow-[0_4px_6px_-2px_rgba(30,41,59,0.3),0_12px_16px_-4px_rgba(30,41,59,0.3)] w-full" style={{ borderRadius: 6 }}>
              <div>
                <h5 className="font-[inter] font-medium text-[12px] text-[#1E293B]">
                  {food.title}
                </h5>
                <span className="font-[inter] font-normal text-[11px] text-chucky-gray-100">
                  {food.served} served
                </span>
              </div>
              <div>
                <p
                  className={`font-[inter] font-medium text-[12px] text-[#1E293B]`}
                >
                  ${food.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuContainer;
