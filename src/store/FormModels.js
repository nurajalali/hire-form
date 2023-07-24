import { createModel } from "@rematch/core";
export const FormModels = createModel()({
  state: {
    rows: [],
    isEdit: false,
    isOpen: false,
  },
  reducers: {
    addNewRows: (state, payload) => {
      return {
        ...state,
        rows: [...state.rows, payload],
      };
    },
    RemoveRow: (state, payload) => {
      return {
        ...state,
        rows: state.rows.filter((row) => row.id !== payload),
      };
    },
    editForm: (state, payload) => ({
      ...state,
      isEdit: payload,
    }),
    openForm: (state, payload) => ({
      ...state,
      isOpen: payload,
    }),
  },
});
