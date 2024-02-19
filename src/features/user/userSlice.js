import api from "api/config";
import { createAppSlice } from "../createAppSlice";

const initialState = {
  loading: false,
  user: null,
  isUserAuthenticated: false,
  isUserLoggedIn: false,
};

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    signup: create.asyncThunk(
      async ({ fullName, email, password, status }) => {
        const response = await api.post("/user/register", {
          fullName,
          email,
          password,
          status,
        });
        return response.data;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          console.log("AsyncThunk rejected:", action.error); // Add this line
          state.loading = false;
        },
        fulfilled: (state, action) => {
          console.log(action.payload)
          state.loading = false;
          state.user = action.payload.data;
          state.isUserAuthenticated = true;
          state.isUserLoggedIn = true;
        },
      }
    ),
    login: create.asyncThunk(
      async ({ email, password }) => {
        const res = await api.post("/user/login", { email, password });
        return await res.json();
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.false = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isUserAuthenticated = true;
          state.isUserLoggedIn = true;
        },
      }
    ),
  }),
});

export const { signup, login } = userSlice.actions;

export default userSlice.reducer;
