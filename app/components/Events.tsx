"use client";
import Event from "./Event";

const Events: React.FC = () => {
  return (
    <>
      <div className=" py-4">
      <h1 className="text-start text-2xl font-semibold">Events</h1>
        <div className="flex  flex-col  gap-8 ">
          <Event />
          <Event />
        </div>
      </div>
    </>
  );
};
export default Events;
