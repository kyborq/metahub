import { useQuery } from "react-query";

import { getEvents } from "../services/events-service";

export const useGetEvents = () => {
  const { data } = useQuery(["events"], getEvents);
  return data;
};
