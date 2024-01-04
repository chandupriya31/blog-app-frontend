import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
// import axios from "../config/axios"
import { Link } from "react-router-dom"
import { getMyBlogs, removeBlog } from "../actions/blog-action"

function Blogs(){
    const dispatch = useDispatch()
    const blogs = useSelector((state)=>{
        return state.blogs
    })

    useEffect(()=>{
        dispatch(getMyBlogs())
    },[])

    const handleRemove = (id)=>{
        dispatch(removeBlog(id))
    }

    return (
        <div>
            <h2>Listing Blogs-{blogs.data.length}</h2>
            {blogs.data.length>0 ? (
                <ul>
                    {blogs.data.map(ele =>{
                        return <li key = {ele._id}>
                            <Link to={`/my-blogs/${ele._id}`}>{ele.title}</Link>
                            <button onClick={()=>handleRemove(ele._id)}>Remove</button>
                        </li>
                    })}
                </ul>
            ):<b>No Blogs Found... Add your first blog</b>}
            <Link to="/blogs/new">Add Blog</Link>
        </div>
    )
}

export default Blogs