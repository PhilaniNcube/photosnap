import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-5">
      <div className="bg-black py-10 col-span-2 md:py-20 px-10 md:px-20 lg:px-24 flex flex-col justify-center space-y-4">
        <h1 className="text-white uppercase leading-10">Pricing</h1>
        <p className="text-base md:text-xl font-normal leading-7 text-slate-300">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <Image
        src="/pricing/desktop/hero.jpg"
        width={830}
        height={490}
        alt="Hero"
        className="w-full col-span-3 object-cover aspect-video"
      />
    </section>
  );
};
export default Hero;
