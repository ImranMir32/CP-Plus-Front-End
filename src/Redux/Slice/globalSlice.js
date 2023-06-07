import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// register;
export const signUp = createAsyncThunk("global/signup", async (params) => {
  const url = "http://localhost:4000/api/users/signin";
  console.log(url);
  const response = await axios({
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: params,
  });
  return response.data;

  //   let result = await fetch(, {
  //     method: "POST",
  //     body: JSON.stringify(params),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   return result;
});

// //login
// export const signIn = createAsyncThunk("global/signIn", async (params) => {
//   Keyboard.dismiss();
//   console.log(params);
//   const apiSubDirectory = "login";
//   const apiDirectory = "public";
//   const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
//   const response = await axios({
//     method: "POST",
//     url,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: {
//       email: params.email,
//       password: params.password,
//     },
//   });
//   //console.log(response.data.user.name);
//   //console.log(response.data);
//   return response.data;
// });

// //Add New Task
// export const addNewTask = createAsyncThunk(
//   "global/addNewTask",
//   async (params) => {
//     const apiSubDirectory = "tasks";
//     const apiDirectory = "private";
//     // console.log(params);
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
//     await axios({
//       method: "POST",
//       url,
//       headers: {
//         Authorization: `Bearer ${params.token}`,
//         "Content-Type": "application/json",
//       },
//       data: {
//         title: params.title,
//         description: params.description,
//         memberId: params.memberId,
//       },
//     });
//     // console.log("done");
//   }
// );

// //fetchAllTodo
// export const fetchAllTodo = createAsyncThunk(
//   "task/fetchAllTodo",

//   async (token) => {
//     console.log("token-->");
//     console.log(token);
//     const apiSubDirectory = "tasks";
//     const apiDirectory = "private";
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
//     const response = await axios({
//       method: "GET",
//       url,
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data;
//   }
// );

// //editTask
// export const editTask = createAsyncThunk("task/editTask", async (params) => {
//   const apiSubDirectory = "tasks";
//   const apiDirectory = "private";
//   const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.id}`;
//   console.log(params);
//   await axios({
//     method: "PATCH",
//     url,
//     headers: {
//       Authorization: `Bearer ${params.token}`,
//       "Content-Type": "application/json",
//     },
//     data: {
//       title: params.title,
//       description: params.description,
//       memberId: params.memberId,
//     },
//   });
// });

// //deleteTask
// export const deleteTask = createAsyncThunk(
//   "task/deleteTask",
//   async (params) => {
//     console.log("I'm in");
//     const apiSubDirectory = "tasks";
//     const apiDirectory = "private";
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.id}`;
//     const response = await axios({
//       method: "DELETE",
//       url,
//       headers: { Authorization: `Bearer ${params.token}` },
//     });
//     console.log("delete sucessful");
//   }
// );

// //Members
// //get All Members
// export const getAllMembers = createAsyncThunk(
//   "member/getAllMembers",
//   async (token) => {
//     console.log("get all");
//     const apiSubDirectory = "members";
//     const apiDirectory = "private";
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
//     const response = await axios({
//       method: "GET",
//       url,
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data.members;
//   }
// );

// //Add new Member
// export const addNewMember = createAsyncThunk(
//   "task/addNewMember",
//   async (params) => {
//     console.log(params);
//     const apiSubDirectory = "members";
//     const apiDirectory = "private";
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
//     await axios({
//       method: "POST",
//       url,
//       headers: {
//         Authorization: `Bearer ${params.token}`,
//         "Content-Type": "application/json",
//       },
//       data: {
//         name: params.name,
//       },
//     });
//     console.log("member add sucessfully");
//   }
// );

// //deleteMember
// export const deleteMember = createAsyncThunk(
//   "task/deleteMember",
//   async (params) => {
//     console.log(params);
//     const apiSubDirectory = "members";
//     const apiDirectory = "private";
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.id}`;
//     await axios({
//       method: "DELETE",
//       url,
//       headers: { Authorization: `Bearer ${params.token}` },
//     });
//     console.log("member delete sucessfully");
//   }
// );

// //Edit member
// export const editMember = createAsyncThunk(
//   "task/editMember",
//   async (params) => {
//     const apiSubDirectory = "members";
//     const apiDirectory = "private";
//     const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.id}`;
//     await axios({
//       method: "PATCH",
//       url,
//       headers: {
//         Authorization: `Bearer ${params.token}`,
//         "Content-Type": "application/json",
//       },
//       data: {
//         name: params.name,
//       },
//     });
//   }
// );

// export const dropDownList = (memberList) => {
//   const newMemberList = memberList.map((member) => {
//     return {
//       label: member.name,
//       value: member.id,
//     };
//   });

//   return newMemberList;
// };

// //globalSlice
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    token: "",
    userName: "",
    user: {},
    accountCreated: false,
    //isLoading: false,
    //isUpdated: false,
  },

  //reducer
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setModalOpenSignUp: (state, action) => {
      state.modalOpenSignUp = action.payload;
    },

    setShouldShowError: (state, action) => {
      state.shouldShowError = action.payload;
    },
    setIsUpdate: (state, action) => {
      state.isUpdated = action.payload;
    },
    clearData: (state) => {
      state.token = "";
      state.userName = "";
      state.user = {};
      state.isLoading = false;
      state.isUpdated = false;
    },
  },

  //   //API
  extraReducers: (builder) => {
    //SignUp
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accountCreated = true;
      console.log("action--> ", action);
      //   Alert.alert("Acount has been created sucessfully");
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
    });

    //     //login
    //     builder.addCase(signIn.pending, (state) => {
    //       state.isLoading = true;
    //     });
    //     builder.addCase(signIn.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.userName = action.payload.user.name;
    //       state.token = action.payload.token;
    //       //  console.log("token is --> :");
    //       //  console.log(action.payload.token);
    //     });
    //     builder.addCase(signIn.rejected, (state, action) => {
    //       state.isLoading = false;
    //       console.log(action.error.message);
    //     });

    //     //addNewTask
    //     builder.addCase(addNewTask.pending, (state) => {
    //       state.isUpdated = false;
    //     });
    //     builder.addCase(addNewTask.fulfilled, (state, action) => {
    //       // state.title = "";
    //       //state.description = "";
    //       //   state.shouldShowTitle = false;
    //       state.isUpdated = true;
    //       // state.taskList = action.payload;
    //       //  state.taskList.push(action.payload);
    //     });
    //     builder.addCase(addNewTask.rejected, (state, action) => {
    //       state.isUpdated = false;
    //       console.log(action.error);
    //     });

    //     //fetchAllTodo
    //     builder.addCase(fetchAllTodo.pending, (state) => {
    //       state.isLoading = true;
    //     });
    //     builder.addCase(fetchAllTodo.fulfilled, (state, action) => {
    //       console.log("get all todo");
    //       state.taskList = action.payload;
    //       state.isLoading = false;
    //     });
    //     builder.addCase(fetchAllTodo.rejected, (state, action) => {
    //       state.isLoading = false;
    //     });

    //     //editTask
    //     builder.addCase(editTask.pending, (state) => {
    //       state.isUpdated = false;
    //     });
    //     builder.addCase(editTask.fulfilled, (state, action) => {
    //       // state.title = "";
    //       // state.description = "";
    //       // state.shouldShowTitle = false;
    //       state.isUpdated = true;
    //     });
    //     builder.addCase(editTask.rejected, (state, action) => {
    //       state.isUpdated = false;
    //       console.log(action.error);
    //     });

    //     //delete
    //     builder.addCase(deleteTask.pending, (state) => {
    //       state.isUpdated = false;
    //     });
    //     builder.addCase(deleteTask.fulfilled, (state, action) => {
    //       state.isUpdated = true;
    //     });
    //     builder.addCase(deleteTask.rejected, (state, action) => {
    //       state.isUpdated = false;
    //       console.log(action.payload);
    //     });

    //     //Members
    //     //Get all members
    //     builder.addCase(getAllMembers.pending, (state) => {
    //       state.isLoading = true;
    //     });
    //     builder.addCase(getAllMembers.fulfilled, (state, action) => {
    //       console.log("get all members");
    //       state.membersList = action.payload;
    //       state.isLoading = false;
    //     });
    //     builder.addCase(getAllMembers.rejected, (state, action) => {
    //       state.isLoading = false;
    //     });

    //     //Add new members
    //     builder.addCase(addNewMember.pending, (state) => {
    //       state.isUpdated = false;
    //     });
    //     builder.addCase(addNewMember.fulfilled, (state, action) => {
    //       // state.title = "";
    //       //state.description = "";
    //       //   state.shouldShowTitle = false;
    //       state.isUpdated = true;
    //       // state.taskList = action.payload;
    //       //  state.taskList.push(action.payload);
    //     });
    //     builder.addCase(addNewMember.rejected, (state, action) => {
    //       state.isUpdated = false;
    //       console.log(action.payload);
    //     });

    //     //delete Member
    //     builder.addCase(deleteMember.pending, (state) => {
    //       state.isUpdated = false;
    //     });
    //     builder.addCase(deleteMember.fulfilled, (state, action) => {
    //       state.isUpdated = true;
    //     });
    //     builder.addCase(deleteMember.rejected, (state, action) => {
    //       state.isUpdated = false;
    //       console.log(action.payload);
    //     });

    //     //edit Member
    //     builder.addCase(editMember.pending, (state) => {
    //       state.isUpdated = false;
    //     });
    //     builder.addCase(editMember.fulfilled, (state, action) => {
    //       // state.title = "";
    //       // state.description = "";
    //       // state.shouldShowTitle = false;
    //       state.isUpdated = true;
    //     });
    //     builder.addCase(editMember.rejected, (state, action) => {
    //       state.isUpdated = false;
    //       console.log(action.payload);
    //     });
  },
});

export const {
  accountCreated,
  clearData,
  clear,
  //   checkDescription,
  setUserName,

  //   setModalOpenSignUp,
  //   setShouldShowError,
} = globalSlice.actions;

export default globalSlice.reducer;
