import axios from '../config/axios'

export const GET_ALL_BLOGS = 'GET_ALL_BLOGS'

export const getMyBlogs = ()=>{
    return async(dispatch)=>{
        try{
            const response = await axios.get('/api/my-blogs',)
            dispatch(setBlogs(response.data))
        }catch(e){
            console.log(e.message)
        }
    }
}

const setBlogs = (blogs)=>{
    return {type: 'GET_ALL_BLOGS',payload:blogs}
}

export const setAddBlog = ({formData,resetForm,navigate})=>{
    return async(dispatch)=>{
        try{
            const response = await axios.post('/api/blogs',formData)
            console.log(response.data)
            dispatch(addBlog(response.data))
            resetForm()
            navigate(`/my-blogs/${response.data._id}`)
        }
        catch(err){
            console.log(err.response.data.errors)
            // console.log(err.response)
            dispatch(errors(err.response.data.errors))
        }
    }
}

const addBlog = (formData)=>{
    return {type:'ADD_BLOG',payload:formData}
}

const errors = (error)=>{
    return {type:'SERVER_ERRORS',payload:error}
}

export const removeBlog = (id)=>{
    return async(dispatch)=>{
        const response = await axios.delete(`/api/blogs/${id}`)
        dispatch(remove(response.data._id))
    }
}

const remove = (id)=>{
    return {type:'REMOVE_BLOG',payload:id}
}

export const startEditBlog = ({id,formData,resetForm,navigate})=>{
    return async(dispatch)=>{
        try{
            const response = await axios.put(`/api/blogs/${id}`,formData)
            dispatch(editBlog(response.data))
            resetForm()
            navigate(`/my-blogs/${response.data._id}`)
        }catch(e){
            console.log(e.message)
        }
    }
}

const editBlog = (blog)=>{
    return {type:'EDIT_BLOG',payload:blog}
}