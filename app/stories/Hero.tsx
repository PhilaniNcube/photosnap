import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative isolate">
      <Image
        src="/stories/desktop/moon-of-appalacia.jpg"
        width={1920}
        height={1080}
        alt="Hero"
        className="w-full aspect-3/1 object-cover"
      />
      <div className="absolute flex flex-col justify-center items-start space-y-8 inset-0 p-20">
        <p className="uppercase text-white ">
          Last month&apos;s featured story
        </p>
        <h1 className="text-white uppercase leading-10">
          Hazy full <br /> moon of <br />
          Appalachia
        </h1>
        <p className="text-white text-md">
          March 2nd 2020 <span className="font-bold">by John Appleseed</span>
        </p>

        <p className="text-white text-lg leading-7 max-w-[50ch]">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </p>
        <Link
          href={`/stories/appalacia`}
          className="flex justify-between items-center"
        >
          <p className="text-white uppercase font-medium mr-8">Read the Story</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};
export default Hero;
