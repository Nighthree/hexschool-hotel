export function zeorFormat(num: number | string): string {
  return Number(num) > 9 ? `${num}` : `0${num}`;
}
