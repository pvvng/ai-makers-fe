// type
import { Metadata } from "next";
// components
import SignBanner from "./components/Banner/SignBanner";
import MultiViewCarousel from "./components/MultiViewCarousel/MultiViewCarousel";
import PopularContainer from "./components/Popular/PopularContainer";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div>
      <SignBanner type="loggedIn" />
      {/* <SignBanner type="loggedOut" /> */}
      <MultiViewCarousel />
      <PopularContainer />
      <Footer />
    </div>
  );
}
