import clsx from "clsx";
import { ClassValue } from "clsx";

export const cn = (...values: ClassValue[]) => {
  return clsx(...values);
};
