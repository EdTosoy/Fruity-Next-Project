import Image from "next/image"
export default function Hero() {
    return (
        <main className="grid-container">
            <div className="col-start-2 col-end-3 flex flex-col md:flex-row justify-between items-center pt-20 pb-10">
                <div className="max-w-sm">
                    <h1 className="text-4xl md:text-6xl font-black text-purple-900  mb-3">Fresh Juice</h1>
                    <p className="mb-5 md:text-lg">We Beleive That Healthy Eating, Clean Air And, Gental Char Best Start To Genuine Wellbeing</p>
                    <button className="rounded-md bg-purple-900 hover:bg-purple-800 py-3 px-8 text-white">SHOP NOW</button>
                </div>
                <div className="m-10 md:mr-0">
                    <Image src="/images/banner.png" width={640}  height={603} alt="hero" />
                </div>
            </div>
        </main>
    )
}