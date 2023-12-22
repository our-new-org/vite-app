export type User = {
  id: number;
  email: string;
  apartmentNumber: number;
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
  date: Date;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;

  user: User;
  facility: Facility;
};
