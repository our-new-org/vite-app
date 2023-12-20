import { create } from 'zustand';

interface SlotStore {
  selected: Date | null;
}

export const useSlotStore = create<SlotStore>(() => ({
  selected: null,
}));
