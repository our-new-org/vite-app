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
  openingTime: string;
  closingTime: string;
  bookings: Booking[];
};

export type Booking = {
  id: number;
  userId: number;
  facilityId: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;

  user: User;
  facility: Facility;
};
