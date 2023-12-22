import { create } from 'zustand';
// const API_URL = import.meta.env.VITE_API_URL;

type DatePickerStore = {
  selectedDate: Date;
  currentMonth: Date;
  selectedSlot: Date | null;
  setSelectedSlot: (date: Date | null) => void;
  setSelectedDate: (date: Date) => void;
  setCurrentMonth: (date: Date) => void;
};

export const useDatePickerStore = create<DatePickerStore>((set) => ({
  selectedDate: new Date(),
  currentMonth: new Date(),
  selectedSlot: null,
  setSelectedSlot: (selectedSlot: Date | null) => set({ selectedSlot }),
  setCurrentMonth: (currentMonth: Date) => set({ currentMonth }),
  setSelectedDate: (selectedDate: Date) => set({ selectedDate }),
}));
