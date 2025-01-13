// type
import { Metadata } from "next";
// components
import SignBanner from "./components/Banner/SignBanner";
import MultiViewCarousel from "./components/MultiViewCarousel/MultiViewCarousel";
import PopularContainer from "./components/Popular/PopularContainer";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div>
      {/* <SignBanner type="loggedIn" /> */}
      <SignBanner type="loggedOut" />
      <MultiViewCarousel />
      <hr />
      <PopularContainer />
    </div>
  );
}

{/* <a href="https://kr.freepik.com/free-psd/3d-icon-product-management_44990839.htm#fromView=search&page=1&position=4&uuid=a4e0a592-c043-4e1f-a2e4-4d9faf642478">출처 freepik</a> */}
{/* <a href="https://kr.freepik.com/free-psd/3d-space-rocket-with-smoke_13677911.htm#fromView=keyword&page=1&position=0&uuid=453de67c-118e-4638-a69d-754b23be7568">출처 freepik</a> */}
{/* <a href="https://kr.freepik.com/free-psd/3d-dart-board-target-with-bullseye-arrow_13677884.htm">출처 freepik</a> */}
{/* <a href="https://kr.freepik.com/free-psd/trophy-cup-icon-isolated-3d-render-illustration_28991002.htm#fromView=search&page=1&position=2&uuid=d51207ea-131a-4820-a59a-40c950809d17">출처 feepik</a> */}
// user2
// https://kr.freepik.com/free-psd/3d-icon-social-media-app_36190320.htm#fromView=search&page=2&position=10&uuid=8ac4734c-dce5-44db-b702-415ce26cd4d1
// user3
// https://kr.freepik.com/free-photo/user-front-side-with-white-background_42312477.htm#fromView=search&page=15&position=46&uuid=92b1ed87-c39f-413d-ae60-6fafe0c457b9
// user old
// https://kr.freepik.com/free-psd/3d-rendering-avatar_70822363.htm#fromView=search&page=5&position=40&uuid=1d68decb-bb41-4b0f-a0bd-5d42f0af8093
// user new
// https://kr.freepik.com/free-psd/3d-rendering-avatar_70823079.htm?sign-up=google#fromView=search&page=1&position=35&uuid=a9324ccb-6600-4db1-b82a-e680e9adcc1f
