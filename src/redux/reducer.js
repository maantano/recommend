import { combineReducers } from "redux";

import { asyncUpFetch } from "../components/About/Section1";

import CheckIsDone from "./checkReducer";
import filter from "./filter";

const rootReducer = combineReducers({
  CheckIsDone,
  filter,
});
// const initialState2 = {
//   // category: [],
//   CategoryList: [2],
// };

// const rootReducer1 = (state = initialState, action) => {
//   // // console.log(action);
//   // // console.log("~~~~");
//   // // console.log(state);
//   // // console.log(filterCategory2.type);
//   // // console.log(filterCategory2());
//   // // console.log(action);
//   // switch (action.type) {
//   //   // case "FILTERCATEGORY":
//   //   case filterCategory2.type:
//   //     let arr2 = [];
//   //     console.log("@@@@@@@@@@@ 3번째 동작!!!!!");
//   //     console.log(state.category);
//   //     console.log(action.payload);
//   //     if (state.category.includes(action.payload)) {
//   //       const arr = state.category.filter((item) => item !== action.payload);
//   //       arr2 = [...arr];
//   //     } else {
//   //       arr2 = [...state.category, action.payload];
//   //     }
//   //     console.log(arr2);
//   //     return {
//   //       category: arr2,
//   //     };
//   //   default: {
//   //     return state;
//   //   }
//   // }
//   return {};
// };
// export const reducer = createReducer([], {
//   [filterCategory2]: (state, action) => {
//     // console.log(arr);
//     if (current(state).includes(action.payload)) {
//       // console.log(state[1]);
//       // console.log(action.payload);
//       // console.log("if!!!!!");
//       // state.map();
//       state.filter((item) => item !== action.payload);
//       // console.log();
//       // current(state).filter((item) => {item !== action.payload});
//     } else {
//       console.log("else");
//       state.push(action.payload);
//     }
//     // current(state).filter((item) => item !== action.payload);
//     // state.filter((item) => item !== action.payload);
//     // console.log(current(state));
//     // state.push(action.payload);
//   },

//   // {
//   //   // console.log(state);
//   //   console.log(action.payload);
//   //   // state.push(action.payload);
//   //   console.log(state);
//   // },
// });
// const rootReducer2 = (state = initialState2, action) => {
//   // console.log(action);
//   // console.log("~~~~");
//   // console.log(state);

//   switch (action.type) {
//     case "FILTERLIST":
//       return {
//         CategoryList: [{ ...state }, action.payload],
//         // CategoryList: [...state, action.payload],
//       };
//     default: {
//       return state;
//     }
//   }
// };

// const asyncUpFetch = createAsyncThunk(
//   "filter/asyncUpFetch",
//   getCategoryCount2()
// );

// ------------------------------------------------------------
// const checkInitial = {
//   done: {
//     id: "",
//     chk: false,
//   },
// };
// export const CheckIsDone = createSlice({
//   name: "checkReducer",
//   initialState: { checkInitial, status: "Start" },
//   reducers: {
//     toggleDone: (state, action) => {
//       const { id, chk } = action.payload;
//       state[id].chk = chk;
//       console.log("state ===>", state);
//       console.log("action ===>", action);
//     },
//   },
// });

// reducers: {
//   filterlist: (state, action) => {
//     // console.log(current(state.list));
//     if (current(state.list).includes(action.payload)) {
//       let idx = state.list.indexOf(action.payload);
//       state.list.splice(idx, 1);
//     } else {
//       state.list.push(action.payload);
//     }
//   },
// },

// ------------------------------------------------------------

// export const filter = createSlice({
//   name: "filterReducer",
//   initialState: [],
//   reducers: {
//     filterlist: (state, action) => {
//       if (current(state).includes(action.payload)) {
//         let idx = state.indexOf(action.payload);
//         state.splice(idx, 1);
//       } else {
//         state.push(action.payload);
//       }
//     },
//     filterlist2: (state, action) => {
//       // console.log(action.payload);
//       // state.push()
//       // console.log(state);
//       // console.log(action);
//       // // state.push(action.payload);
//       // console.log("222222");
//       // return { state };
//     },
//   },
// });

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// export const { toggleDone } = CheckIsDone.actions;

// export const { filterlist, filterlist2 } = filter.actions;
// filter
// export const filter2 = createSlice({
//   name: "filterRducer2",
//   initialState: [],
//   reducers: {
//     filterlist2: (state, action) => {
//       console.log("111111111");
//       console.log(state);
//       console.log(action);
//       state.push(action.payload);
//       return {};
//     },
//   },
// });
// const initialState2 = {
//   CategoryList: [],
// };
// export const { filterlist } = filter.actions;
// const rootReducer2 = (state = initialState2, action) => {
//   switch (action.type) {
//     case "FILTERLIST":
//       return {
//         CategoryList: action.payload,
//       };
//     default: {
//       return state;
//     }
//   }
// };
// const counterInitialState = { counter: 0 };

// export const counter = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

// const cartInitialState = [];

// export const cart = (state = cartInitialState, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return [...state, action.payload];
//     case "DELETE_ITEM":
//       return state.filter((product) => product.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   // reducer,
//   // rootReducer1,
//   // rootReducer2,
//   // counter,

//   filter,
// });
// const rootReducer = combineReducers({
//   filter,
//   CheckIsDone,
// });

// export default filter;

export default rootReducer;
