import { create } from "zustand";
// we use create((set)=>{}), set is the setter function.
// you can use set function like set({}) and set value of variable or you can pass a function and and return object that sets value of variable like: set(()=>{if(open){return {activeModal: "cart"}} return {activeModal: ""}})

type ModalStore = {
  activeModal: string | "";
  closeAll: () => void;
  setCartActive: (open: boolean) => void;
  setMobileSiderbarActive: (open: boolean) => void;
};

export const useModal = create<ModalStore>((set) => ({
  activeModal: "",
  closeAll: () => set({ activeModal: "" }),
  setCartActive: (open: boolean) =>
    set(() => {
      if (open) {
        return { activeModal: "cart" };
      }
      return { activeModal: "" };
    }),
  setMobileSiderbarActive: (open: boolean) =>
    set(() => {
      if (open) {
        return { activeModal: "mobileSiderbar" };
      }
      return { activeModal: "" };
    }),
}));
