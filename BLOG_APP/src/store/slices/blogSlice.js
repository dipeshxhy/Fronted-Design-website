import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogs: [],
  currentBlogId:null
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let cpyFormData = { ...state.formData };

      cpyFormData = {
        ...cpyFormData,
        ...action.payload,
      };
      state.formData = cpyFormData;
    },
    addBlog: (state, action) => {
      state.blogs=[...state.blogs,{
        id: nanoid(),
        ...state.formData,
      }];
      state.formData = {
        title: "",
        description: "",
      };
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    setBlogsListInitialLoad: (state, action) => {
      state.blogs = action.payload.blogList;
    },

    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id!== action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    setCurrentBlogId:(state,action)=>{
const {payload}=action
const {currentBlogId}=payload
state.currentBlogId=currentBlogId
    },
    handleEditBlog:(state,action)=>{
      let cpyEditBlog=[...state.blogs]
      const findIndexOfCurrentBlog=cpyEditBlog.findIndex(singleBlog=>singleBlog.id===state.currentBlogId)
      cpyEditBlog[findIndexOfCurrentBlog]={
        ...cpyEditBlog[findIndexOfCurrentBlog],
        ...state.formData
      }
      state.blogs=cpyEditBlog
      localStorage.setItem("blogs", JSON.stringify(cpyEditBlog));
    }
  },
});
export const { handleInputChange, addBlog, setBlogsListInitialLoad,deleteBlog,setCurrentBlogId ,handleEditBlog} =
  blogSlice.actions;
export default blogSlice.reducer;
