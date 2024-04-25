import { api } from "../api";
import { Event } from "../models/event-model";
import { Result } from "../models/result-model";

export const getEvents = async () => {
  const { data } = await api.get<Result<Event>>("collections/events/records");
  return data.items;
};

export const getEvent = async (eventId: string) => {
  const { data } = await api.get<Event>(
    `collections/events/records/${eventId}`
  );
  return data;
};
