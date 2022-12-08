import Image from "next/image";
import Link from "next/link";

const Grid = () => {
  const stories = [
    {
      image: "/stories/desktop/mountains.jpg",
      date: "April 16th 2020",
      title: "The Mountains",
      href: "/stories/mountains",
      author: "John Appleseed",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/cityscapes.jpg",
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      href: "/stories/cityscapes",
      author: "Benjamin Cruz",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/18-days-voyage.jpg",
      date: "April 11th 2020",
      title: "18 Days Voyage",
      href: "/stories/voyage",
      author: "Alexei Borodin",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/architecturals.jpg",
      date: "April 9th 2020",
      title: "Architecturals",
      href: "/stories/architecturals",
      author: "Samantha Brooke",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/world-tour.jpg",
      date: "April 7th 2020",
      title: "World Tour 2019",
      href: "/stories/world-tour",
      author: "Timothy Wagner",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/unforeseen-corners.jpg",
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      href: "/stories/unforeseen-corners",
      author: "William Malcolm",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/king-on-africa.jpg",
      date: "March 29th 2020",
      title: "King On Africa: Part II",
      href: "/stories/king-on-africa",
      author: "Tim Hillenburg",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/trip-to-nowhere.jpg",
      date: "March 21st 2020",
      title: "The Trip to Nowhere",
      href: "/stories/trip-to-nowhere",
      author: "Felicia Rourke",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/rage-of-the-sea.jpg",
      date: "March 19th 2020",
      title: "Rage of The Sea",
      href: "/stories/rage-of-the-sea",
      author: "Mohammed Abdul",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/running-free.jpg",
      date: "March 16th 2020",
      title: "Running Free",
      href: "/stories/running-free",
      author: "Michelle",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/behind-the-waves.jpg",
      date: "March 11th 2020",
      title: "Behind the Waves",
      href: "/stories/behind-the-waves",
      author: "Lamar Wilson",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/calm-waters.jpg",
      date: "March 9th 2020",
      title: "Calm Waters",
      href: "/stories/calm-waters",
      author: "Samantha Brooks",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/milky-way.jpg",
      date: "March 5th 2020",
      title: "The Milky Way",
      href: "/stories/milky-way",
      author: "Benjamin Cruz",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/dark-forest.jpg",
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      href: "/stories/dark-forest",
      author: "Mohammed Abdul",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/somwarpet.jpg",
      date: "March 1st 2020",
      title: "Somwarpet's Beauty",
      href: "/stories/somwarpet",
      author: "Michelle",
      width: 360,
      height: 500,
    },
    {
      image: "/stories/desktop/land-of-dreams.jpg",
      date: "February 25th 2020",
      title: "Land of Dreams",
      href: "/stories/land-of-dreams",
      author: "William Malcolm",
      width: 360,
      height: 500,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 bg-black gap-0">
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
                <g fill="none" fillRule="evenodd" stroke="#fff">
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
export default Grid;
