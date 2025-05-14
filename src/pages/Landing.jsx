export default function Landing() {
  return (
    <section className='flex-col md:grid md:grid-cols-2 h-screen'>
      <div className='bg-gray-300 min-h-fit'>
        <div className="container">
          <div className=''>
            <img src="hero1.svg" className='size-fit' alt="" />
          </div>
          <div className="mt-20 flex justify-evenly items-center gap-8">
            <div className="bg-black min-w-fit w-full items-center justify-center flex h-20 rounded-full">
              <h1 className="text-white text-2xl font-bold">Cardinary</h1>
            </div>
            <a href="https://www.tokopedia.com/emporiummisc" className="bg-gray-500 min-w-fit w-full items-center justify-center flex h-20 rounded-full">
              <h1 className="text-white text-2xl font-bold">Cardinary</h1>
            </a>
          </div>
        </div>
      </div>

      <div className='bg-gray-300 min-h-fit flex justify-center items-center'>
        <div className="container">
          <img src="hero2.svg" className='size-fit' alt="" />
        </div>
      </div>
    </section>
  );
}
