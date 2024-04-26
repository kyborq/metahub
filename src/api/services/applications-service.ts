import { api } from "../api";
import {
  Application,
  CreateApplication,
  EditApplication,
} from "../models/application-model";
import { Result } from "../models/result-model";
import { createMember, createMembers } from "./members-service";

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
    `/collections/applications/records?expand=members&filter=(event='${id}')`
  );
  return data.items;
};

export const editApplication = async ({
  application,
  member,
}: EditApplication) => {
  const { id, members } = application;

  const { id: memberId } = await createMember(member);
  const updateData = {
    members: [...members, memberId],
  };

  const { data } = await api.patch<Application>(
    `/collections/applications/records/${id}`,
    updateData
  );
  return data;
};

// PATCH /api/collections/applications/records
