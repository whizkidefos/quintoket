import { Banner, TopSellers } from "../components";

const Home = () => (
  <section className='flex justify-center p-12 mt-8 sm:px-4'>
    <div className="w-full minmd:w-4/5">
      <Banner
        title='Discover, collect & sell extraordinary NFTs.'
        parentStyles='justify-start mb-4 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl'
        childStyles='md:text-4xl sm:text-2xl xs:text-xl text-left'
      />

      <TopSellers />

    </div>
  </section>
);

export default Home;
