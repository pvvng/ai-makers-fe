// type
import { Metadata } from "next";
// components
import Banner from "./components/Banner/Banner";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div>
      <Banner />
    </div>
  );
}
