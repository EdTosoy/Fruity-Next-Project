import Image from "next/image";
export default function Promo() {
  return (
    <main className="grid-container">
      <div className="col-start-2 col-end-3 pt-20 pb-10 grid md:grid-cols-2 ">
        <div className="border rounded-lg p-4 flex items-center justify-between m-4">
          <div className="">
            <h1 className="text-2xl font-semibold mb-2">
              Daily Fresh <br /> Fresh Fruits
            </h1>
            <button className="rounded-full bg-purple-900 hover:bg-purple-800 py-3 px-8 text-white">
              Shop Now
            </button>
          </div>
          <Image src="/images/cat2.png" width={150} height={150} />
        </div>
        <div className="border rounded-lg p-4 flex items-center justify-between m-4">
          <div className="">
            <h1 className="text-2xl font-semibold mb-2">
              Big Save <br /> Save 50%
            </h1>
            <button className="rounded-full bg-purple-900 hover:bg-purple-800 py-3 px-8 text-white">
              Shop Now
            </button>
          </div>
          <Image src="/images/cat1.png" width={150} height={150} />
        </div>
      </div>
    </main>
  );
}
