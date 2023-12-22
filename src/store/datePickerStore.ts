import { create } from 'zustand';
// const API_URL = import.meta.env.VITE_API_URL;

type DatePickerStore = {
  selectedDate: Date;
  currentMonth: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentMonth: (date: Date) => void;
};

export const datePickerStore = create<DatePickerStore>((set) => ({
  selectedDate: new Date(),
  currentMonth: new Date(),
  setCurrentMonth: (currentMonth: Date) => set({ currentMonth }),
  setSelectedDate: (selectedDate: Date) => set({ selectedDate }),
}));
