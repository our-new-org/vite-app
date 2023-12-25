const mockedBookings = [
  {
    id: 1,
    userId: 1,
    facilityId: 3,
    date: '2023-12-25T08:00:00.000Z',
    startTime: '2023-12-25T08:00:00.000Z',
    endTime: '2023-12-25T10:00:00.000Z',
    createdAt: '2023-12-01T00:00:00.000Z',
    updatedAt: '2023-12-23T00:00:00.000Z',
    user: {
      id: 1,
      name: 'John Doe',
    },
    facility: {
      id: 3,
      name: 'Conference Hall',
    },
  },
  {
    id: 2,
    userId: 2,
    facilityId: 4,
    date: '2023-12-27T15:00:00.000Z',
    startTime: '2023-12-27T15:00:00.000Z',
    endTime: '2023-12-27T17:00:00.000Z',
    createdAt: '2023-12-02T00:00:00.000Z',
    updatedAt: '2023-12-24T00:00:00.000Z',
    user: {
      id: 2,
      name: 'Jane Smith',
    },
    facility: {
      id: 4,
      name: 'Padel Court',
    },
  },
];

export default mockedBookings;
