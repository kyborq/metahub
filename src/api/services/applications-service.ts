import { api } from "../api";
import { Application, CreateApplication } from "../models/application-model";
import { Result } from "../models/result-model";
import { createMembers } from "./members-service";

export const createApplication = async (application: CreateApplication) => {
  const { team, members, event } = application;

  try {
    const createdMembers = await createMembers(
      members.map((member) => ({ name: member.name, grade: member.grade }))
    );
    const memberIds = createdMembers.map((member) => member.id);

    const applicationData = {
      team,
      event,
      members: memberIds,
    };

    const { data } = await api.post<Application>(
      "/collections/applications/records",
      applicationData
    );

    return data;
  } catch (error) {
    console.error("Failed to create application:", error);
    throw Error("Error...");
  }
};

export const listApplications = async (id: string) => {
  const { data } = await api.get<Result<Application>>(
    `/collections/applications/records?filter=(event='${id}')&fields=id,team,members&expand=members`
  );
  return data.items;
};
