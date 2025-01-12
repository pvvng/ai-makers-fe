// components
import ListItem from "./ListItem";
import Carousel from "./Carousel";

export default function Banner() {
  return (
    <div className="w-full flex gap-2 justify-center items-center p-4 pt-10 pb-10 px-8">
      <ListItem />
      <Carousel />
    </div>
  );
}
