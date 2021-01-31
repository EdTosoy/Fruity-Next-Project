import AllProducts from "components/AllProducts";
import Contacts from "components/Contacts";
import FeaturedProducts from "components/FeaturedProducts";
import Header from "components/Header";
import Hero from "components/Hero";
import NewProducts from "components/NewProducts";
import Promo from "components/Promo";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewProducts />
      <Promo />
      <AllProducts />
      <FeaturedProducts />
      <Contacts />
      <Footer />
    </div>
  );
}