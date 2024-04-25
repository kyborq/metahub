import { CreateMember, Member } from "./member-model";

export type CreateApplication = {
  team: string;
  members: CreateMember[];
  event: string;
};

export type Application = {
  id: string;
  team: string;
  members: Member[];
  event: string;
};
