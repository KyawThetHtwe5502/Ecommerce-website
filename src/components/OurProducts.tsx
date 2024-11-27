import useSWR from "swr";
import { Button } from "./ui/button";
import Container from "./Container";
import TodayCard from "./TodayCard";

const fetcher = (...args: [string, RequestInit?]): Promise<any> =>
  fetch(...args).then((res) => res.json());
const OurProducts = () => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/our-products`,
    fetcher
  );

  return (
    <section className="my-10">

    
    <Container>
      <div className="py-10">
        {/* heading */}
        <div className="flex items-center gap-x-4 font-semibold">
          <span className="w-5 h-10 bg-secondary2 rounded"></span>
          <h3 className="text-secondary2 ">Our Products</h3>
        </div>
        <div className="py-6">
          <h3 className="text-3xl font-bold">Explore Our Products</h3>
        </div>
        {/* products */}
        {isLoading ? (
          <p>...loading</p>
        ) : (
          <div className="grid grid-cols-12 gap-4">
            {data.map((product) => (
              <TodayCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">

      <Button className="bg-secondary2">View All Products</Button>
      </div>
    </Container>
    </section>
  );
};

export default OurProducts;
