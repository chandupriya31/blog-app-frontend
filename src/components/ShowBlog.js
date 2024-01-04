import { useSelector } from "react-redux"
import { useParams,Link } from "react-router-dom"

function ShowBlog(){
    const {id} = useParams()
    const blog = useSelector(state=>{
        return state.blogs.data.find(ele => ele._id === id)
    })
    console.log(blog)
    return (
        <div>
            <h2>Show Blog</h2>
            <h3>{blog?.title}</h3>
            <b>{blog?.content}</b>
            <Link to={`/blogs/edit/${id}`}>edit</Link>
        </div>
    )
}

export default ShowBlog