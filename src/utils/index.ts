import { setHours, setMinutes } from 'date-fns';

export const combineDateAndTime = (baseDate: Date, hours: number) => {
  const minutes = 0;
  return setMinutes(setHours(baseDate, hours), minutes);
};
