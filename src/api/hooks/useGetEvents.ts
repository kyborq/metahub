import { useQuery } from "react-query";

import { getEvents } from "../services/events-service";

export const useGetEvents = () => {
  const { data, isLoading } = useQuery(["events"], getEvents);
  return { events: data, isLoading };
};
