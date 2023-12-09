const jobs = [
  {
    title: "CSS",
    date: "February 2022",
    description: "SOME PLACHOLDER TEXT",
  },
  {
    title: "IMS",
    date: "February 2022",
    description: "SOME PLACHOLDER TEXT",
  },
];

export default function TimelineComponent() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-400">
      {jobs.map((job) => (
        <li className="mb-10 ms-4" key={job.title}>
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-gray-200 bg-gray-200 dark:border-gray-400 dark:bg-gray-400" />

          <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
            {job.date}
          </time>

          <h3 className="text-lg font-semibold dark:text-white">{job.title}</h3>

          <p className="mb-4 text-base font-normal">{job.description}</p>
        </li>
      ))}
    </ol>
  );
}
