const jobs = [
  {
    title: "CSS",
    date: "Aug. 2023 - Heute",
    description: "Junior Software Engineer",
  },
  {
    title: "CSS",
    date: "Aug. 2022 - Juli 2023",
    description: "Praktikum - Informatiker/in EFZ Applikationsentwicklung",
  },
  {
    title: "Informatikmittelschule",
    date: "Aug. 2019 - Juli 2023",
    description:
      "EFZ Informatiker/in Applikationsentwicklung & Berufsmaturität",
  },
];

export default function TimelineComponent() {
  return (
    <div className="mt-12">
      <ol className="relative border-s-2 border-gray-600 dark:border-gray-400">
        {jobs.map((job) => (
          <li className="mb-10 ms-4" key={job.title}>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-gray-500 bg-gray-500 dark:border-gray-400 dark:bg-gray-400" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
              {job.date}
            </time>

            <h3 className="text-lg font-semibold dark:text-white">
              {job.title}
            </h3>

            <p className="mb-4 text-base font-normal ">{job.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
