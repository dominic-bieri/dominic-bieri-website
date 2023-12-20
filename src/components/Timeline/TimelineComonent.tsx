import React from "react";
import TimelineItem from "./TimelineItem";

interface Job {
  title: string;
  date: string;
  description: string;
}

const jobs: Job[] = [
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
    <div className="mt-8">
      {jobs.map((job) => (
        <TimelineItem
          date={job.date}
          title={job.title}
          description={job.description}
          key={job.title}
        />
      ))}
    </div>
  );
}
