

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "./ui/carousel"

export function CarouselDemo() {
  return (
    <div  className="pt-10">
        
    <Carousel className="w-[892px] bg-Text2">
      <CarouselContent >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="" key={index}>
            <div className="p-1">
              <Card className="bg-Text2 border-none text-white">
                <CardContent className="flex  items-center justify-center p-6">
                    <div className="flex flex-col gap-y-10">
                        <div className="flex items-center gap-x-12">
                            <img src="Apple_logo.png" className="w-[40px] " alt="" />
                            <span className="text-sm text-secondary">iPhone 14 Series</span>
                        </div>
                        <h3 className="text-4xl font-bold">Up to 10% off Voucher</h3>
                        <a>
                            <p className="underline">Shop Now</p>

                        </a>
                    </div>
                    <img src="Hero.png" className="w-[496px]" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
    </div>
  )
}
