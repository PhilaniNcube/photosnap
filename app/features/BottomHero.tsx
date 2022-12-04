import Image from "next/image";
import Link from "next/link";

const BottomHero = () => {
  return (
    <section className="relative isolate">
      <Image
        src="/shared/desktop/bg-beta.jpg"
        width={1440}
        height={280}
        className="w-full object-cover"
        alt="Background"
      />
      <div className="absolute inset-0 p-10 md:p-24 flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-white leading-10">
          We&apos;re in beta. <br /> Get your invite <br />
          today!
        </h1>

        <Link
          href={`/pricing`}
          className="flex justify-between space-x-6 items-center"
        >
          <p className="text-white uppercase font-medium">Get An Invite</p>
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
export default BottomHero;
