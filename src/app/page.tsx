import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254F1A] h-screen w-full flex space-x-8 justify-center items-center">
        <div className="flex justify-center items-center width-1/2 p-4 mt-20">
          <div className="w-1/2">
            <h1 className="text-yellow-400 text-6xl font-bold mb-4">
              Everything you are.
              <br />
              In one, simple link
              <br />
              in bio.
            </h1>
            <p className="w-[40vw] mb-4 text-yellow-300">Join 50M+ people using Linktree for their link in bio.
              One link to help you share everything you create, curate and sell from your Instagram, TikTok,
              Twitter, YouTube and other social media profiles.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="linktr.ee/yourname" className="p-4 border rounded-md bg-white font-semibold"/>
              <button className="p-4 border rounded-full bg-pink-200 font-semibold">Claim your Linktree</button>
            </div>
          </div>
          <div>
            <Image src="/link1.png" alt="Hero Image" width={500} height={500} />
          </div>
        </div>
      </section>
      <section className="bg-red-500 h-screen ">

      </section>
    </main>
  );
}
