/**
 * Transforms date with ISO 8601 format into
 * a format more legible, i.e:
 *
 * 2023-04-11T02:01:26.000Z into 2023-04-11 02:01
 *
 * @param isoDate
 * @returns a string representing a date i.e. 2023-04-11 02:01
 */
export function transformDateFormat(isoDate: string): string {
  const date = new Date(isoDate);
  const transformedDate = date.toISOString().slice(0, 16).replace("T", " ");

  return transformedDate;
}
