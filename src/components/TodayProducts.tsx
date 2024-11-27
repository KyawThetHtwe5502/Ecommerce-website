import useSWR from "swr";
import { Button } from "./ui/button";
import Container from "./Container";
import TodayCard from "./TodayCard";

const fetcher = (...args: [string, RequestInit?]): Promise<any> =>
  fetch(...args).then((res) => res.json());
const TodayProducts = () => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/today-products`,
    fetcher
  );

  return (
    <section  className="py-10">
      <Container>
        {/* today products */}
        <div className="mb-10">
          {/* heading */}
        <div className="flex items-center gap-x-4 font-semibold">
          <span className="w-5 h-10 bg-secondary2 rounded"></span>
          <h3 className="text-secondary2 ">Today's</h3>
        </div>
        <div className="py-6">
          <h3 className="text-3xl font-bold">Flash Sales</h3>
        </div>
        {isLoading ? (
          <p>...loading</p>
        ) : (
          <div className="grid grid-cols-12 gap-x-4">
            {data?.map((product) => (
              <TodayCard key={product.id} product={product} />
            ))}
          </div>
        )}
        </div>
        {/* button */}
        <div className="flex items-center justify-center">

      <Button className="bg-secondary2">View All Products</Button>
      </div>
      </Container>
      
    </section>
  );
};

export default TodayProducts;
