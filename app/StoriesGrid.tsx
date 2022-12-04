import Image from "next/image";
import Link from "next/link";

const StoriesGrid = () => {

const stories = [
  {
    image: "/stories/desktop/mountains.jpg",
    title: "The Mountains",
    href: "/stories/mountains",
    author: "John Appleseed",
    width: 360,
    height: 500,
  },
  {
    image: "/stories/desktop/cityscapes.jpg",
    title: "Sunset Cityscapes",
    href: "/stories/cityscapes",
    author: "Benjamin Cruz",
    width: 360,
    height: 500,
  },
  {
    image: "/stories/desktop/18-days-voyage.jpg",
    title: "18 Days Voyage",
    href: "/stories/voyage",
    author: "Alexei Borodin",
    width: 360,
    height: 500,
  },
  {
    image: "/stories/desktop/architecturals.jpg",
    title: "Architecturals",
    href: "/stories/architecturals",
    author: "Samantha Brooke",
    width: 360,
    height: 500,
  },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stories.map((story, i) => (
        <article key={i} className="relative isolate w-full">
          <Image
            src={story.image}
            width={story.width}
            height={story.height}
            alt={story.title}
            className="w-full object-cover"
          />
          <div className="bg-slate-900/20  p-10 absolute inset-0 flex flex-col justify-end">
            <h3 className="text-white">{story.title}</h3>
            <p className="text-white text-sm mb-4">by {story.author}</p>
            <hr className="text-white mb-4" />
            <Link
              href={`/${story.href}`}
              className="flex justify-between items-center"
            >
              <p className="text-white uppercase font-medium">Read Story</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fill-rule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};
export default StoriesGrid;
