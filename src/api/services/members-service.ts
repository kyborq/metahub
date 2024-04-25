import { api } from "../api";
import { CreateMember, Member } from "../models/member-model";

export const createMembers = async (members: CreateMember[]) => {
  const promises = members.map((member) => createMember(member));
  const results = await Promise.all(promises);
  return results;
};

export const createMember = async (member: CreateMember) => {
  const { data } = await api.post<Member>(
    "/collections/members/records",
    member
  );
  return data;
};
