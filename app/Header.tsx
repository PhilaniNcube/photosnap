import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className="grid grid-cols-5">
        <div className="bg-black py-10 col-span-5 sm:col-span-3 lg:col-span-2 md:py-20 px-10 md:px-20 lg:px-24 flex flex-col justify-center space-y-4">
          <h1 className="text-white uppercase leading-10">
            Create and share your photo stories.
          </h1>
          <p className="text-base md:text-xl font-normal leading-7 text-slate-300">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>

          <Link
            href="/pricing"
            className="flex items-center space-x-3 text-white"
          >
            <p className="text-md tracking-wider text-white uppercase">
              Get An Invite
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Link>
        </div>
        <Image
          src="/home/desktop/create-and-share.jpg"
          width={830}
          height={650}
          alt="Hero"
          className="w-full h-full col-span-5 sm:col-span-2 lg:col-span-3 object-cover aspect-video sm:aspect-[3/5] lg:aspect-video"
        />
      </section>
    </>
  );
};
export default Header;
