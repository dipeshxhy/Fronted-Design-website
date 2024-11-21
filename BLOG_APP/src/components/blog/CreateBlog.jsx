import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, handleEditBlog, handleInputChange, setCurrentBlogId } from '../../store/slices/blogSlice'

const CreateBlog = () => {
const {blog}=useSelector(state=>state)
const dispatch=useDispatch()
const {currentBlogId}=blog
console.log(blog)

const onChangeInput=(event)=>{
dispatch(handleInputChange({
    [event.target.name]:event.target.value
}))
}
const handleFormSubmit=(event)=>{
    event.preventDefault()
    if(currentBlogId!==null) dispatch(handleEditBlog())
      else dispatch(addBlog())
    if(currentBlogId!==null)
    dispatch(setCurrentBlogId({
  currentBlogId:null}))
    dispatch(handleInputChange({
      title:"",
      description:""
    }))

}


// if(blog.formData.title.trim().length===0 || blog.formData.description.trim().length===0) return
  return (
    <div>CreateBlog
        <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text"
            name='title'
            placeholder='Enter Title here'
            id='title'
            value={blog.formData?.title}
            onChange={onChangeInput}

            
            />
            <label htmlFor="description">Description:</label>
            <input type="text"
            name='description'
            placeholder='Enter Title here'
            id='description'
            value={ blog.formData?.description}

            onChange={onChangeInput}


            />
            <button  type='submit'>{
              blog.currentBlogId ? "Edit Blog":"Creare New Blog"
}</button>
        </form>
    </div>
  )
}

export default CreateBlog
