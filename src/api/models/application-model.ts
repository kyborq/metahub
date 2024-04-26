import { CreateMember, Member } from "./member-model";

export type CreateApplication = {
  team: string;
  members: CreateMember[];
  event: string;
  alone?: boolean;
  no_other_members?: boolean;
};

export type EditApplication = {
  application: Application;
  member: CreateMember;
};

export type Application = {
  id: string;
  team: string;
  expand: { members: Member[] };
  members: string[];
  event: string;
  no_other_members: boolean;
};
