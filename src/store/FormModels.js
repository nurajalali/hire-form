import { createModel } from "@rematch/core";
export const FormModels = createModel()({
  state: {
    rows: [],
    isEdit: false,
    isOpen: false,
    counter: 0,
  },
  reducers: {
    newCounter: (state) => ({
      ...state,
      counter: state.counter + 1,
    }),
    addNewRows: (state, payload) => {
      return {
        ...state,
        rows: [...state.rows, payload],
      };
    },
    RemoveRow: (state, payload) => {
      return {
        ...state,
        rows: state.rows.filter((row) => row.rowId !== payload),
      };
    },
    isEdit: (state) => {
      return { ...state, isEdit: true };
    },
    isNotEdit: (state) => {
      return { ...state, isEdit: false };
    },
    openForm: (state, payload) => ({
      ...state,
      isOpen: payload,
    }),

    updateRowTable: (state, payload) => {
      const index = state.rows.findIndex((row) => row.rowId === payload.rowId);
      return {
        ...state,
        rows: [
          ...state.rows.slice(0, index),
          payload,
          ...state.rows.slice(index + 1, state.rows.length),
        ],
      };
    },
    // updateRowTable: (state, payload) => ({
    //   ...state,
    //   rows: state.rows.map((row) => {
    //     if (row.id === payload) {
    //       row.Firstname = FirstName;
    //       row.LastName = LastName;
    //     }
    //     return row;
    //   }),
    // }),
    // updateRowTable: (state, payload) => ({
    //   ...state,
    //   findIndexValue: state.rows.findIndex((row) => row.id === payload.rowId),
    // }),
  },
});
