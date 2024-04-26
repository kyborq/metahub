import { useMutation, useQueryClient } from "react-query";

import { editApplication } from "../services/applications-service";

export const useUpdateApplication = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(editApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(["applications"]);
      onSuccess && onSuccess();
    },
  });

  return { editApplication: mutate, isLoading };
};
