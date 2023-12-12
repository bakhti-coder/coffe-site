import { create } from "zustand";
import request from "../server";

const useAuth = create((set) => ({
  isAuthenticated: false,
  user: null,
  isModalOpen: false,
  isModalLoading: false,
  openModal: (form) => {
    set({ isModalOpen: true });
    form.resetFields();
  },
  closeModal: () => {
    set({ isModalOpen: false });
  },
  handleLogin: async (form, navigate) => {
    const values = await form.validateFields();
    if (values.Email === "admin@gmail.com" && values.Password === "admin") {
      navigate("/dashboard");
    }
    try {
      set({ isModalLoading: true });
      await request.post("auth/login", values);
      set({ isAuthenticated: true });
    } finally {
      set({ isModalLoading: false });
    }
  },
  handleRegister: async (form) => {
    const values = await form.validateFields();
    const formData = new FormData();
    formData.append("FirstName", values.FirstName);
    formData.append("LastName", values.LastName);
    formData.append("Email", values.Email);
    formData.append("Password", values.Password);
    try {
      set({ isModalLoading: true });
      const { data } = await request.post("auth/register", formData);
      console.log(data);
    } finally {
      set({ isModalLoading: false });
    }
  },
}));

export default useAuth;
