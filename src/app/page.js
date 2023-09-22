import Carousel from "./components/Carousel";
import MainBanner from "./components/MainBanner";
import ReservationBar from "./components/ReservationBar";

export default function Home() {
  return (
    <> 
      <MainBanner/>
      <ReservationBar/>
      <Carousel/>
    </>
  )
}
