import { create } from "zustand";
import request from "../server";

const crud = (url) => {
  return create((set, get) => ({
    data: [],
    loading: false,
    search: "",
    page: 1,
    isModalLoading: false,
    isModalOpen: false,
    btnLoading: false,
    btnId: null,
    closeModal: () => {
      set({ isModalOpen: false });
    },
    showModal: () => {
      set({ isModalOpen: true });
    },
    handlePage: (page) => {
      set({ page: page });
      get().getData();
    },
    handleSearch: (e) => {
      set({ search: e.target.value });
      get().getData();
    },
    getData: async () => {
      try {
        set((state) => ({ ...state, loading: true }));
        const { data } = await request.get(url);
        set({ data: data });
      } finally {
        set((state) => ({ ...state, loading: false }));
      }
    },
    handleOk: async (form) => {
      const values = await form.validateFields();
      try {
        set((state) => ({ ...state, isModalLoading: true }));
        await request.post(url, values);
        form.resetFields();
        get().getData();
        get().closeModal();
      } finally {
        set((state) => ({ ...state, isModalLoading: false }));
      }
    },
    deleteData: () => {},
  }));
};

export default crud;
