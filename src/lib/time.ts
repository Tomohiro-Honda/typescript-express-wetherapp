export const isRefleshed = (
  created_at: number,
  refleshTime?: number,
): boolean => {
  const three_hour = 3 * 60 * 60 * 1000;
  const now = Date.now();
  const nowHour = new Date(now).getHours();
  const createdHour = new Date(created_at).getHours();
  refleshTime = !refleshTime || refleshTime < 1 ? 1 : refleshTime;

  if (
    created_at + three_hour < now ||
    (createdHour !== nowHour && nowHour % refleshTime === 0)
  ) {
    return true;
  } else {
    return false;
  }
};
