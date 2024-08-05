"use client";
import React, { useState } from "react";
import Event from "./Event";
import { EventType } from "@/types/EventType";

interface EventsProps {
  events: EventType[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  const [activeFilter, setActiveFilter] = useState(0);

  const filters = [
    { id: 0, name: "recent" },
    { id: 1, name: "old" }
  ];

  const handleFilterChange = (id: number) => {
    setActiveFilter(id);
  };

  const sortedEvents = [...events].sort((a, b) => {
    if (activeFilter === 0) {
      return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
    } else {
      return new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime(); 
    }
  });

  return (
    <div className=" ">
      <div className="w-full sm:w-[80%] lg:w-[70%] xl:w-[80%] mx-auto">
        <div className="flex justify-between">
          <h1
            className="text-start text-2xl font-semibold underline text-[#4AA6E8]"
            id="eventsScroll"
          >
            Events
          </h1>
          <ul className="flex gap-4 justify-end h-8 pr-4">
            {filters.map((filter) => (
              <li
                key={filter.id}
                className={`bg-transparent hover:border-b-2 px-3 py-1 uppercase hover:border-b-[#4AA6E8] hover:bg-[#F4F4F4] ${activeFilter === filter.id ? "border-b-[#4AA6E8] border-b-2" : ""}`}
                onClick={() => handleFilterChange(filter.id)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {sortedEvents.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
