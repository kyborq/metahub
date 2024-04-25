export type ClassName = string | number | boolean | null | undefined;

export const classes = (...args: ClassName[]) => {
  return args.filter(Boolean).join(" ");
};
