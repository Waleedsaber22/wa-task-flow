import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  isTaskDialogOpen: false,
  task: null,
  column: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    openCreateDialog: (state, action) => {
      state.isTaskDialogOpen = true;
      state.task = null;
      state.column = action.payload; // column key
    },

    openEditDialog: (state, action) => {
      state.isTaskDialogOpen = true;
      state.task = action.payload;
      state.column = action.payload.column;
    },

    closeTaskDialog: (state) => {
      state.isTaskDialogOpen = false;
      state.task = null;
      state.column = null;
    },
  },
});

export const {
  setSearch,
  openCreateDialog,
  openEditDialog,
  closeTaskDialog,
} = uiSlice.actions;

export default uiSlice;