import AllProducts from "components/AllProducts";
import Contacts from "components/Contacts";
import FeaturedProducts from "components/FeaturedProducts";
import Header from "components/Header";
import Hero from "components/Hero";
import NewProducts from "components/NewProducts";
import Promo from "components/Promo";
import Head from "next/head";
import Footer from "../components/Footer";
import { MenuProvider } from "../ContextAPI/openMenu";

export default function Home() {
  return (
    <MenuProvider>
      <div>
        <Head>
          <title>Fruity</title>
          <meta
            name="description"
            content="We Beleive That Healthy Eating, Clean Air And, Gental Char Best Start To Genuine Wellbeing "
          />
        </Head>

        <Header />
        <Hero />
        <NewProducts />
        <Promo />
        <AllProducts />
        <FeaturedProducts />
        <Contacts />
        <Footer />
      </div>
    </MenuProvider>
  );
}
