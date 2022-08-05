import { MdWaterDrop, MdPestControl, MdContentCut } from "react-icons/md";
const PlantCare = () => {
  const list = [
    {
      name: "Pruning Weeds",
      desc: "Be diligent in cleaning the weeds or weeds that grow regularly to avoid pests and diseases.",
      icon: <MdContentCut className="w-full h-full " />,
    },
    {
      name: "Humidity Control",
      desc: "You have to be diligent in finding out the temperature and humidity according to the type of plant you have",
      icon: <MdWaterDrop className="w-full h-full " />,
    },
    {
      name: "Pest Anticipation",
      desc: "Rotate crop types regularly by planting several different types of crops in one season.",
      icon: <MdPestControl className="w-full h-full " />,
    },
  ];
  return (
    <div className="pt-20 space-y-10 bg-white ">
      <h2 className="text-3xl font-bold text-center cont lg:text-4xl text-brand">
        Steps to start taking care of your plants
      </h2>
      <section className="flex flex-col py-10 gap-x-20 gap-y-14 cont md:flex-row">
        {list.map((item, i) => (
          <div key={i} className="flex-1 space-y-4 text-center">
            <div className="flex w-16 h-16 p-4 mx-auto text-white rounded-full bg-brand">
              {item.icon}
            </div>
            <p className="text-lg font-bold text-brand-dark">{item.name}</p>
            <p className="text-brand/80"> {item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlantCare;
