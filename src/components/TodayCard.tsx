import { Badge } from "./ui/badge"
import { TbHeart, TbEye } from "react-icons/tb";

interface PropType {
  id: number;
  name: string;
  img: string;
  originalPrice: boolean;
  discountPercentage: boolean;
  discountPrice: boolean;
  rate: boolean;
}
const TodayCard = ({product}:PropType) => {
  return (
    <div  className=" col-span-3 group">
      <div className="h-[250px] relative mb-5  bg-secondary ">
        <div className="p-5">
        <div className="w-48 h-44  m-auto my-5 flex items-center justify-center">
          <img src={product.img} alt="" />
        </div>
        </div>
        <button className="bg-black text-white py-2 w-full absolute bottom-0  group-hover:opacity-100 opacity-0 duration-200 transition-all">Add to Cart</button>
        {product.discountPercentage &&         <Badge className="absolute top-5 left-5 rounded-sm bg-secondary2">{product.discountPercentage}</Badge> 
      }
      <div className="space-y-2 absolute top-4 right-4">
        <div className="size-[34px] bg-white flex justify-center items-center rounded-full">
          <TbHeart/>
        </div>
        <div className="size-[34px] bg-white flex justify-center items-center rounded-full">
        <TbEye/>
        </div>
      </div>
        <div>

        </div>
      </div>
      <div>
        <h3>{product.name}</h3>
        {
          product.originalPrice ? <div className="flex items-center gap-x-4">
          <span className="text-secondary2">${product.originalPrice}</span>
        
          <span className="text-secondary">${product.discountPrice}</span>
        </div> :           <span className="text-secondary2">${product.discountPrice}</span>

        }
        
        <div className="flex items-center gap-x-4">
          <p>ddd</p>
          <span>({product.rate})</span>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
