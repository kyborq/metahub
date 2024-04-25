import { useQuery } from "react-query";

import { getEvent } from "../services/events-service";

export const useEventInfo = (id?: string) => {
  const { data, isLoading } = useQuery(["events", id], () =>
    id ? getEvent(id) : undefined
  );
  return { event: data, isLoading };
};
