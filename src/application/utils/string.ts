export const isAllFilled = (...args: unknown[]) =>
  args.every((arg) => arg !== null && arg !== undefined && arg !== '');

export const splitIntoTwoLines = (oneLineString: string): string => {
  const splittedString = oneLineString.split(' ');
  let firstLine = '',
    secondLine = '';
  while (splittedString.length) {
    if (firstLine.length < secondLine.length) firstLine += ' ' + splittedString.shift();
    else secondLine = splittedString.pop() + ' ' + secondLine;
  }
  return firstLine + '\n' + secondLine;
};
