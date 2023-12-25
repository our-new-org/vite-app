import {
  format,
  parseISO,
  setHours,
  setMinutes,
  isToday,
  isTomorrow,
} from 'date-fns';

export const combineDateAndTime = (baseDate: Date, hours: number) => {
  const minutes = 0;
  const formattedDate = setMinutes(setHours(baseDate, hours), minutes);
  formattedDate.setSeconds(0);
  formattedDate.setMilliseconds(0);
  return formattedDate;
};

export const addDurationToDate = (inputDate: Date, slotDuration: number) => {
  const date = new Date(inputDate);
  const newDate = new Date(date.getTime() + slotDuration * 60000); // Convert minutes to milliseconds and add to the date
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

  return newDate;
};

export function formatTime(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'HH:mm');
}

export function describeDate(dateString: string): string {
  const date = parseISO(dateString);
  if (isToday(date)) {
    return 'Today';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else {
    return '';
  }
}

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'dd MMM');
}

export function getDayOfWeek(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'EEEE');
}
