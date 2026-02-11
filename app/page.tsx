import AboutUs from "./components/aboutus";
import Carousel from "./components/carousel";
import Contact from "./components/contact";
import Counter from "./components/counter";
import Departments from "./components/departments";
import Doctors from "./components/doctors";
import Emergency from "./components/emergency";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import MakeAppointment from "./components/makeappointment";
import NavBar from "./components/navbar";
import Prices from "./components/price";
import Services from "./components/services";
import Testimonilas from "./components/testimonials";
import TopBar from "./components/topbar";

export default function Home() {
  return (
<div>
      <TopBar />
      <NavBar />
      <Carousel />
      <Emergency />
      <AboutUs />
      <Counter />
      <Services />
      <div className="pt-15">
        <MakeAppointment />
        <Departments />
        <Testimonilas />
        <Doctors />
      </div>
      <Gallery />
      <Prices />
      <FAQ />
      <Contact />
      <Footer />
    </div>

  );
}
