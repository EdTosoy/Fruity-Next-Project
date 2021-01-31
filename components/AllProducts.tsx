import Image from "next/image";
export default function AllProducts() {
  const products = [
    {
      image: "/images/product11.png",
      name: "Grapes",
      price: "$3.99",
    },
    {
      image: "/images/product10.png",
      name: "Mango",
      price: "$3.69",
    },
    {
      image: "/images/product3.png",
      name: "Strawberry",
      price: "$4.03",
    },
    {
      image: "/images/product8.png",
      name: "Indian Mango",
      price: "$3.25",
    },
    {
      image: "/images/product7.png",
      name: "Grapes",
      price: "$3.99",
    },
    {
      image: "/images/product6.png",
      name: "Mango",
      price: "$3.69",
    },
    {
      image: "/images/product5.png",
      name: "Strawberry",
      price: "$4.03",
    },
    {
      image: "/images/product4.png",
      name: "Indian Mango",
      price: "$3.25",
    },
  ];
  return (
    <main className="grid-container">
      <div className="col-start-2 col-end-3 pt-20 pb-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-5">All Products</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map(({ image, name, price }) => (
            <div className="m-4 p-4 rounded-lg border shadow-md">
              <div className="grid place-items-center">
                <Image src={image} width={200} height={200} />
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
