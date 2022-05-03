import { format, parseISO } from "date-fns";

export const formatGraphCMSDate = (date: string) =>
  format(parseISO(date), "dd/MM/yyyy");
