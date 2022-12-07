import Image from "next/image";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <section className="grid grid-cols-5">
      <Image
        src="/home/desktop/beautiful-stories.jpg"
        width={830}
        height={600}
        alt="Hero"
        className="w-full h-full col-span-5 sm:col-span-2 lg:col-span-3 object-cover aspect-video sm:aspect-[3/5] lg:aspect-video"
      />
      <div className="bg-white py-10 col-span-5 sm:col-span-3 lg:col-span-2 md:py-20 px-10 md:px-20 lg:px-24 flex flex-col justify-center space-y-4">
        <h1 className="text-black uppercase leading-10">
          Beautiful stories every time
        </h1>
        <p className="text-base md:text-xl font-normal leading-7 text-black">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>

        <Link
          href="/stories"
          className="flex items-center space-x-3 text-black"
        >
          <p className="text-md tracking-wider text-black uppercase">
            View the stories
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#000">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};
export default SectionTwo;
