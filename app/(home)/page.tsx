// type
import { Metadata } from "next";
// components
import Banner from "./components/Banner/Banner";
import PopularContainer from "./components/Popular/PopularContainer";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div>
      <Banner />
      <PopularContainer />
    </div>
  );
}
