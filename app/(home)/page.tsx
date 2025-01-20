// components
import SignBanner from "@/components/Home/Banner/SignBanner";
import Footer from "@/components/Home/Footer";
import MultiViewCarousel from "@/components/Home/MultiViewCarousel/MultiViewCarousel";
import PopularContainer from "@/components/Home/Popular/PopularContainer";
// type
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div>
      {/* <SignBanner type="loggedIn" /> */}
      <SignBanner type="loggedOut" />
      <MultiViewCarousel />
      <PopularContainer />
      <Footer />
    </div>
  );
}
