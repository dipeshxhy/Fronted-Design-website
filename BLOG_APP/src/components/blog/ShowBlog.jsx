import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, setBlogsListInitialLoad,handleInputChange, setCurrentBlogId } from '../../store/slices/blogSlice'

const ShowBlog = () => {
    const {blog}=useSelector((state)=>state)
    const dispatch=useDispatch()
    const {blogs}=blog

    const handleDeleteBlog=(id)=>{
        dispatch(deleteBlog(id))
    }
    const onEditBlog=(getBlog)=>{
        dispatch(setCurrentBlogId({
            currentBlogId:getBlog?.id
        }))
        dispatch(handleInputChange({
            title:getBlog?.title,
            description:getBlog?.description
          }))
    }
    useEffect(()=>{
dispatch(setBlogsListInitialLoad({
    blogList:JSON.parse(localStorage.getItem("blogs" || []) )
}))
    },[])
  return (
    <div>{
        
        blogs?.length>0 ?(
            blogs.map(singleBlog=>(
                <div key={singleBlog.id}>
                    <h3>{singleBlog?.title}</h3>
                    <p>{singleBlog?.description}</p>
                    <button onClick={()=>onEditBlog(singleBlog)} >edit blog</button>
                    <button onClick={()=>handleDeleteBlog(singleBlog.id)}> delete blog</button>
                </div>
            ))
        ) :<h1>please wait data is fetching</h1>
        }
        </div>
  )
}

export default ShowBlog