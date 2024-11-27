import Container from "./Container";
import { Button } from "./ui/button";

const CategoryBanner = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="bg-Text2 flex justify-between p-5">
          <div className="text-white">
            <span className="text-base font-medium text-button2">
              Categories
            </span>
            <h2 className="text-5xl font-semibold max-w-md ">
              Enhance Your Music Experience
            </h2>
            <Button className="bg-button2">Buy Now</Button>
          </div>
          <div className=" p-10">
            
          <div className=" p-10 shadow-slate-100">
            <img src="JBL_BOOMBOX.png" className=" w-[568px] shadow-white" alt="" />
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoryBanner;
