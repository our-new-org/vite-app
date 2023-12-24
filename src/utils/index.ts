import { setHours, setMinutes } from 'date-fns';

export const combineDateAndTime = (baseDate: Date, hours: number) => {
  const minutes = 0;
  return setMinutes(setHours(baseDate, hours), minutes);
};

export const addDurationToDate = (inputDate: Date, slotDuration: number) => {
  const date = new Date(inputDate);
  const newDate = new Date(date.getTime() + slotDuration * 60000); // Convert minutes to milliseconds and add to the date
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

  return newDate;
};
