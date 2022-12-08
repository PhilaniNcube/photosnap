import Image from "next/image";


const Hero = () => {
  return (
    <section className="grid grid-cols-5">
      <div className="bg-black py-10 col-span-5 sm:col-span-3 lg:col-span-2 md:py-20 px-10 md:px-20 lg:px-24 flex flex-col justify-center space-y-4">
        <h1 className="text-white uppercase leading-10">Features</h1>
        <p className="text-base md:text-xl font-normal leading-7 text-slate-300">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
      <Image
        src="/features/desktop/hero.jpg"
        width={830}
        height={490}
        alt="Hero"
        className="w-full col-span-5 sm:col-span-2 lg:col-span-3 object-cover aspect-video sm:aspect-[3/5] lg:aspect-video"
      />
    </section>
  );
};
export default Hero;
