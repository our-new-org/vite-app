export type User = {
  id: number;
  email: string;
  apartmentNumber: number;
  bookings: Booking[];
};

export type Facility = {
  id: number;
  name: string;
  description?: string;
  capacity: number;
  image: string;
  slotDuration: number;
  openingHour: number;
  closingHour: number;
  bookings: Booking[];
};

export type Booking = {
  id: number;
  userId: number;
  facilityId: number;
  facilityName: string;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;

  user: User;
  facility: Facility;
};
