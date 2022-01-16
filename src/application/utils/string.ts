export const isAllFilled = (...args: unknown[]) =>
  args.every((arg) => arg !== null && arg !== undefined && arg !== '');
