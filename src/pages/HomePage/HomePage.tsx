import { useGetEvents } from "../../api/hooks/useGetEvents";
import { usePageTitle } from "../../hooks/usePageTitle";
import { EventCard } from "./components";

export const HomePage = () => {
  const events = useGetEvents();
  usePageTitle();

  return (
    <>
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
};
