// import { useState } from "react"
import { setAddBlog, startEditBlog } from "../actions/blog-action"
import { useDispatch, useSelector } from "react-redux"
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigate,useParams } from "react-router-dom"
import { useEffect } from "react"

function BlogForm(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const blog = useSelector(state =>{
        return state.blogs.data.find(ele => ele._id === id)
    })

    const blogValidationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        content: Yup.string().required('content is required').min(5)
    })
    
    const formik = useFormik({
        initialValues:{
            title: blog?blog.title:'',
            content:blog?blog.content:''
        },
        validationSchema: blogValidationSchema,
        validateOnChange:false,
        onSubmit:(formData,{resetForm})=>{
            if(!blog){
                dispatch(setAddBlog({formData,resetForm,navigate}))
            }else{
                dispatch(startEditBlog({id,formData,resetForm,navigate}))
            }
        }
    })

    useEffect(()=>{
        formik.setFieldValue('title', blog?blog.title:'')
        formik.setFieldValue('content',blog?blog.content:'')
    },[blog])

    return (
        <div>
            <h2>BlogForm Component</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>Title</label><br/>
                <input 
                    type="text" 
                    name = "title"
                    value={formik.values.title} 
                    onChange={formik.handleChange}
                /><br/>
                {formik.errors.title ? formik.errors.title:''}
                <label >Content</label><br/>
                <textarea name="content" value={formik.values.content} onChange={formik.handleChange}></textarea><br/>
                {formik.errors.content ? formik.errors.content:''}<br/>
                <input type="submit"/><br/>
            </form>
        </div>
    )
}

export default BlogForm