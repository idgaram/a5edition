import GenreTheme from "@/components/GenreTheme";
import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nouveautes from "@/components/Nouveautes";
import PortraitAuteure from "@/components/PortraitAuteure";
import PublicationsCarrousel from "@/components/PublicationsCarrousel";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-slate-800">
      <Header />

      <MaxWidthWrapper className="main-page h-full sm:mb-10 lg:mt-10  bg-slate-50  rounded-none  lg:gap-x-0 xl:gap-x-8  xl:rounded-xl ">
        <div className="flex flex-wrap sm:gap-8 gap-8 w-full flex-col items-start">
          <PortraitAuteure />
          <div className="flex w-full items-center  lg:flex-row flex-col gap-8 lg:gap-0">
            <GenreTheme />
            <PublicationsCarrousel />
          </div>
        </div>
        <Nouveautes />
      </MaxWidthWrapper>
      <footer className="bg-slate-700 flex flex-col justify-center items-center">
        <div className="flex  gap-4">
          <p>footer</p>
          <p>footer</p>
          <p>footer</p>
        </div>
        <div className="flex  gap-4">
          <p>footer</p>
          <p>footer</p>
          <p>footer</p>
        </div>
        <div className="flex  gap-4">
          <p>footer</p>
          <p>footer</p>
          <p>footer</p>
        </div>
      </footer>
    </div>
  );
}
