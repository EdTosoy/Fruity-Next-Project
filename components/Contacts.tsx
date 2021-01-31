export default function Contacts() {
  return (
    <main className="grid-container" id="Contact" >
      <div className="col-start-2 col-end-3 flex flex-col md:flex-row  justify-between items-center pt-20 pb-10 border-t">
        <div className="">
          <h1 className="text-purple-900 font-bold text-4xl mb-3">Subscribe for more vidoes</h1>
          <p className="max-w-sm mb-3">
            If you like this website make sure to leave a like, comment and
            Subscribe
          </p>
        </div>
        <div className="relative grid items-center border-black border-4 rounded-full px-4 overflow-hidden ">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="John.doe@gmail.com"
            className="py-4 text-lg w-72 sm:w-96 text-purple-900 "
            aria-label="email"
          />
          <button  className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-8 text-lg rounded-full absolute right-1 ">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}
