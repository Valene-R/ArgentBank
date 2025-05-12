import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  firstname: "",
  lastname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {

		// Action pour sauvegarder les informations de l'utilisateur
    saveUserInfos: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },

		// Action pour déconnecter l'utilisateur
		logoutUser: () => {
      // Réinitialise l'état à l'état initial
      return initialState;
    },
  },
});

export const { saveUserInfos, logoutUser } = userSlice.actions;

export default userSlice.reducer;