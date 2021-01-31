import Image from "next/image";
export default function FeaturedProducts() {
  const products = [
    {
      image: "/images/product9.png",
      name: "Apple",
      price: "$3.99",
    },
    {
      image: "/images/product2.png",
      name: "Mango",
      price: "$3.69",
    },
    {
      image: "/images/product3.png",
      name: "Lemon",
      price: "$4.03",
    },
    {
      image: "/images/product4.png",
      name: "Banana",
      price: "$3.25",
    },
  ];
  return (
    <main className="grid-container" id="Featured" >
      <div className="col-start-2 col-end-3 pt-20 pb-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-5">Featured Products</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map(({ image, name, price }) => (
            <div className="m-4 p-4 rounded-lg border shadow-md">
              <div className="grid place-items-center">
                <Image src={image} width={200} height={200} alt={name} />
                <p className="text-lg">{name}</p>
                <h2 className="font-semibold text-xl text-pink-500 ">
                  {price}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
