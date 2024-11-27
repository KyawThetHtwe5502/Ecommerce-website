import Container from "./Container";
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { LuShieldCheck } from "react-icons/lu";

const Feature = () => {
  return (
    <Container>
      <div className="flex items-center gap-x-4 font-semibold">
        <span className="w-5 h-10 bg-secondary2 rounded"></span>
        <h3 className="text-secondary2 ">Featured</h3>
      </div>
      <div className="py-6">
        <h3 className="text-3xl font-bold">New Arrival</h3>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="relative bg-black col-span-6">
          <div className="flex w-full h-full items-end justify-center">
            <img src="ps5.png" alt="" />
          </div>
          <div className="absolute bottom-9 left-9 max-w-60 text-white">
            <div className="mb-4">
              <h3 className="text-2xl semibold mb-4">PlayStation 5</h3>
              <p className="text-sm">
                Black and White version of the PS5 coming out an sale
              </p>
            </div>
            <div>
              <a href="" className="text-lg font-medium">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="relative bg-black mb-5">
            <div className="flex justify-end">
              <img src="attractive-woman.png" alt="" />
            </div>
            <div className="absolute bottom-5 left-9 max-w-60   text-white">
              <div>
                <h3 className="text-2xl semibold mb-4">Women's Collections</h3>
                <p className="text-sm ">
                  Featured woman collections that give you another vibe
                </p>
              </div>
              <div>
                <a href="" className="text-lg font-medium">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4  w-full">
            <div className="relative bg-black w-full p-5">
              <div className="flex items-center justify-center w-full">
                <img src="amazon.png" alt="" />
              </div>
              <div className="absolute bottom-5 left-9 max-w-xs text-white">
                <div>
                  <h3 className="text-2xl semibold mb-4">Speakers</h3>
                  <p className="text-sm">Amazon wireless speaker</p>
                </div>
                <div>
                  <a href="" className="text-lg font-medium">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-black w-full p-8">
              <div className="flex justify-center items-center">
                <img src="perfume.png" alt="" />
              </div>
              <div className="absolute bottom-5 left-9 max-w-xs text-white">
                <div>
                  <h3 className="text-2xl semibold mb-4">Perfume</h3>
                  <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                </div>
                <div>
                  <a href="" className="text-lg font-medium">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-28 ">
        <div className=" flex justify-around items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="size-20 bg-black flex items-center justify-center rounded-full border-8 border-pink-400 text-white">
              <TbTruckDelivery className="size-10" />
            </div>
            <div>
              <h5 className="text-xl font-semibold">FREE AND FAST DELIVERY</h5>
              <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="size-20 bg-black flex items-center justify-center rounded-full border-8 border-pink-400 text-white">
              <SlEarphonesAlt className="size-10" />
            </div>
            <div>
              <h5 className="text-xl font-semibold">FREE AND FAST DELIVERY</h5>
              <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="size-20 bg-black flex items-center justify-center rounded-full border-8 border-pink-400 text-white">
              <LuShieldCheck className="size-10" />
            </div>
            <div>
              <h5 className="text-xl font-semibold">FREE AND FAST DELIVERY</h5>
              <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Feature;
