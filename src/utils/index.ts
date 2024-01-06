import {
  format,
  parseISO,
  setHours,
  setMinutes,
  isToday,
  isTomorrow,
  setSeconds,
} from 'date-fns';
import { Booking } from '../types';

export const combineDateAndTime = (baseDate: Date, hours: number): Date => {
  return setSeconds(setMinutes(setHours(baseDate, hours), 0), 0);
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

export function isSlotBooked(slot: Date, bookings: Booking[]) {
  // Format the slot start time
  const slotFormatted = format(slot, 'yyyy-MM-dd HH:mm:ss');

  return bookings.some((booking) => {
    // Format booking start and end times
    const bookingStartFormatted = format(
      new Date(booking.startTime),
      'yyyy-MM-dd HH:mm:ss',
    );
    const bookingEndFormatted = format(
      new Date(booking.endTime),
      'yyyy-MM-dd HH:mm:ss',
    );

    // Check if the slot falls within the booking interval
    return (
      slotFormatted >= bookingStartFormatted &&
      slotFormatted < bookingEndFormatted
    );
  });
}

export function delay(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
