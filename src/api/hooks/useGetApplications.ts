import { useQuery } from "react-query";

import { listApplications } from "../services/applications-service";

export const useGetApplications = (id?: string) => {
  const { data } = useQuery(["applications"], () =>
    id ? listApplications(id) : undefined
  );
  return data || [];
};
