import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const PublicationsCarrousel = () => {
  const temporaire = [1, 2, 3, 4, 5];

  return (
    <div className="lg:w-[500px] w-[calc(100vw-8rem)]  lg:mx-auto flex flex-col justify-center mt-4 sm:mt-0">
      <h2 className="text-3xl">Mes Publications</h2>
      <Carousel opts={{ align: "start" }} className="pt-4 sm:mx-16  ">
        <CarouselContent>
          {temporaire.map((n) => (
            <CarouselItem key={n} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="p-6 flex flex-row h-[200px]">
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-center">
                        <h2>un soir d&apos;été en sardaigne</h2>
                        <Button variant={"outline"}>commander!</Button>
                      </div>

                      <div className="basis-1/2 flex flex-col items-start relative ">
                        <Image
                          src="/soir_d_ete_en_sardaigne.png"
                          objectFit="contain"
                          fill={true}
                          alt="portrait d'annie"
                          className=""
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="sm:mx-0 mx-12" />
        <CarouselPrevious className="sm:mx-0 mx-12" />
      </Carousel>
    </div>
  );
};

export default PublicationsCarrousel;
