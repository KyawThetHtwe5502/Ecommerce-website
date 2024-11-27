import { ReactNode } from "react";

type Props = {
    id : number;
    name: string;
    icon: ReactNode;
}

const Category = ({category}: Props) => {
    
  return (
    <div className='border py-10 rounded-md col-span-2 flex items-center justify-center hover:bg-secondary2 hover:text-white duration-200 transition-colors '>
        <div className='flex flex-col items-center gap-y-4'>
                <span className="text-4xl">{category.icon}</span>
                <p>{category.name}</p>
        </div>
    </div>
  )
}

export default Category