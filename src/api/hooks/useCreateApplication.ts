import { useMutation, useQueryClient } from "react-query";

import { createApplication } from "../services/applications-service";

export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  const { mutate, data, isSuccess, isLoading } = useMutation(
    createApplication,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["applications"]);
      },
    }
  );

  return {
    application: data,
    createApplication: mutate,
    isSuccess,
    isApplicationCreating: isLoading,
  };
};
