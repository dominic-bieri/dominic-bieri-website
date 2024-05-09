import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
}) => (
  <div className="flex gap-x-3">
    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-700">
      <div className="relative z-10 w-7 h-7 flex justify-center items-center">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
    </div>

    <div className="grow pt-0.5 pb-8">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {date}
      </time>
      <h3 className="flex gap-x-1.5 font-semibold text-white">{title}</h3>
      <p className="mb-4 text-base font-normal">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
