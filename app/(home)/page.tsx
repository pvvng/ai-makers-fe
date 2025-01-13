// type
import { Metadata } from "next";
// components
import Banner from "./components/Banner";
import MultiViewCarousel from "./components/MultiViewCarousel/MultiViewCarousel";
import PopularContainer from "./components/Popular/PopularContainer";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div>
      <Banner />
      <MultiViewCarousel />
      <PopularContainer />
      <hr />
    </div>
  );
}

{/* <a href="https://kr.freepik.com/free-psd/3d-icon-product-management_44990839.htm#fromView=search&page=1&position=4&uuid=a4e0a592-c043-4e1f-a2e4-4d9faf642478">출처 freepik</a> */}
{/* <a href="https://kr.freepik.com/free-psd/3d-space-rocket-with-smoke_13677911.htm#fromView=keyword&page=1&position=0&uuid=453de67c-118e-4638-a69d-754b23be7568">출처 freepik</a> */}
{/* <a href="https://kr.freepik.com/free-psd/3d-dart-board-target-with-bullseye-arrow_13677884.htm">출처 freepik</a> */}
{/* <a href="https://kr.freepik.com/free-psd/trophy-cup-icon-isolated-3d-render-illustration_28991002.htm#fromView=search&page=1&position=2&uuid=d51207ea-131a-4820-a59a-40c950809d17">출처 feepik</a> */}
