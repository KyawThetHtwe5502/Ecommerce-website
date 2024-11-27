import Container from "./Container";
import { FaChevronRight } from "react-icons/fa";
import { CarouselDemo } from "./Carousel";

    

const HeroSection = () => {
    
    
  return (
    <section className="mb-16">    
      <Container>
      <div className="flex justify-between">
        <div className="border-e border-e-slate-600  mr-6 px-6 pt-10">
        <ul className=" flex flex-col gap-y-5 w-full">
          <li className="inline-flex items-center justify-between">
            Woman's Fashion <FaChevronRight />
          </li>
          <li className="inline-flex items-center justify-between">
            Men's Fashion <FaChevronRight />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        </div>
        {/* <SimpleSlider/> */}
        <CarouselDemo/>
      </div>
    </Container>
    </section>

  );
};

export default HeroSection;
