import create from "zustand";
import { devtools, persist } from "zustand/middleware";

// SWEET ALERT
import Swal from "sweetalert2";

// AXIOS AND API_LINK
import axios from "axios";
import { API_LINK } from "../utils/apiLink";
import setAuthToken from "../utils/setAuthToken";

const loginStore = (set, get) => ({
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  loginResident: async (values) => {
    try {
      const { data } = await axios.post(`${API_LINK}/auth-resident`, values);
      localStorage.setItem("token", data.token);

      set({
        token: data.token,
        user: data.user,
        isAuthenticated: true,
        role: data.role,
      });
    } catch (error) {
      localStorage.removeItem("token");
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
    const token = localStorage.getItem("token");
    setAuthToken(token);
    try {
      set({
        loading: true,
      });
      const { data } = await axios.get(`${API_LINK}/auth-resident`);
      set({
        token: token,
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
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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
