import create from "zustand";
import { devtools, persist } from "zustand/middleware";

// SWEET ALERT
import Swal from "sweetalert2";

// AXIOS AND API_LINK
import axios from "axios";
import { API_LINK } from "../utils/apiLink";

const loginStore = (set, get) => ({
  token: null,
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  loginResident: async (values) => {
    try {
      const { data } = await axios.post(`${API_LINK}/auth-resident`, values);
      set({
        token: data.token,
        user: data.user,
        isAuthenticated: true,
        role: data.role,
      });
    } catch (error) {
      set({
        token: null,
        user: null,
        isAuthenticated: false,
        role: null,
      });
      return Swal.fire("Error", `${error.response.data.msg}`, "error");
    }
  },
  loadResident: async () => {
    const { state } = JSON.parse(localStorage.getItem("loginState"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": state.token,
      },
    };

    try {
      set({
        loading: true,
      });
      const { data } = await axios.get(`${API_LINK}/auth-resident`, config);
      set({
        token: state.token,
        user: data.user,
        isAuthenticated: true,
        role: data.role,
        loading: false,
      });
    } catch (err) {
      set({
        token: null,
        user: null,
        isAuthenticated: false,
        role: null,
        loading: false,
      });
    }
  },
  logout: async () => {
    set({
      token: null,
      user: null,
      isAuthenticated: false,
      role: null,
      error: null,
    });
  },
});

const useLoginStore = create(
  devtools(
    persist(loginStore, {
      name: "loginState",
    })
  )
);

// if (process.env.NODE_ENV === "development") {
//   mountStoreDevtool("LoginStore", useLoginStore);
// }

export default useLoginStore;
