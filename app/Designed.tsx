import Image from "next/image";
import Link from "next/link";

const Designed = () => {
  return (
    <section className="grid grid-cols-5">
      <div className="bg-white py-10 col-span-2 md:py-20 px-10 md:px-20 lg:px-24 flex flex-col justify-center space-y-4">
        <h1 className="text-black uppercase leading-10">
          Designed for everyone
        </h1>
        <p className="text-base md:text-xl font-normal leading-7 text-black">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
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
      <Image
        src="/home/desktop/designed-for-everyone.jpg"
        width={830}
        height={600}
        alt="Hero"
        className="w-full col-span-3 object-cover aspect-video"
      />
    </section>
  );
};
export default Designed;
