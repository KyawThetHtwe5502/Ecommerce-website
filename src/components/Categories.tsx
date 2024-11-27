
import  { TbDeviceMobile, TbDeviceImac, TbCamera, TbDeviceWatchStats, TbHeadphones, TbDeviceGamepad } from  'react-icons/tb';
import Container from "./Container";
import Category from "./Category";

const data = [
    {
        id: 1,
        name: "Phones",
        icon: <TbDeviceMobile />
    },
    {
        id: 2,
        name: "Computers",
        icon: <TbDeviceImac/>
    },
    {
        id: 3,
        name: "SmartWatch",
        icon: <TbDeviceWatchStats/>
    },
    {
        id: 4,
        name: "Camera",
        icon: <TbCamera/>
    },
    {
        id: 5,
        name: "HeadPhones",
        icon: <TbHeadphones/>
    },
    {
        id: 6,
        name: "Gaming",
        icon: <TbDeviceGamepad/>
    }
]

const Categories = () => {
  

  return (
    <Container>
      <div className="py-10">
        {/* heading */}
        <div className="flex items-center gap-x-4 font-semibold">
          <span className="w-5 h-10 bg-secondary2 rounded"></span>
          <h3 className="text-secondary2 ">Categories</h3>
        </div>
        <div className="py-6">
          <h3 className="text-3xl font-bold">Browse By Category</h3>
        </div>
        {/* products */}
        
          <div className="grid grid-cols-12 gap-4">
            {data.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>

      </div>
    </Container>
  );
};

export default Categories;
