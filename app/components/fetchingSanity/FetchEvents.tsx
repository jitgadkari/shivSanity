import { getEvents } from "@/sanity/sanity-utils";
import { EventType } from "@/types/EventType";
import Events from "../Events";



export default async function FetchEvents() {
    const events:EventType[] = await getEvents();

  return (
    <>
      <Events events={events} />
    </>
  );
}
