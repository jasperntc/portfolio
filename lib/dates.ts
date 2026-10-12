const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "2023-07" -> "Jul 2023" */
export function formatMonth(yearMonth: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(yearMonth);
  if (!match) throw new Error(`Expected YYYY-MM, got "${yearMonth}"`);
  const month = Number(match[2]);
  if (month < 1 || month > 12) throw new Error(`Bad month in "${yearMonth}"`);
  return `${MONTHS[month - 1]} ${match[1]}`;
}

/** "Jul 2023 – Mar 2026", or "Apr 2023 – Present" when end is null */
export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}
