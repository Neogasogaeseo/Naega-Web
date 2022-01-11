function randomSelect<T>(arr: T[]): T {
  const length = arr.length;
  const randomIndex = Math.floor(Math.random() * length);
  return arr[randomIndex];
}

export { randomSelect };
