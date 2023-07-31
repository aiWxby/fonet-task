import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReportTypes } from "../../Helpers/Types/TypeDefinitions";
import { dummyDeports } from "../../Helpers/Data/DummyReportData";

type ValueType = {
  value: Array<ReportTypes>;
};

const initialState: ValueType = {
  value: dummyDeports,
};

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    addReport: (state, action: PayloadAction<ReportTypes>) => {
      state.value.unshift(action.payload);
    },
  },
});

export const { addReport } = reportsSlice.actions;
export default reportsSlice.reducer;
