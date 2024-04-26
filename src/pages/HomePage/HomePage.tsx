import { useGetEvents } from "../../api/hooks/useGetEvents";
import { LoaderIcon } from "../../assets/icons";
import { usePageTitle } from "../../hooks/usePageTitle";
import { EventCard } from "./components";

export const HomePage = () => {
  usePageTitle();

  const { events, isLoading } = useGetEvents();

  if (isLoading) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoaderIcon width={32} fill="#6c757d" />
      </div>
    );
  }

  return (
    <>
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
};
