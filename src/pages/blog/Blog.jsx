import Nav from "../../components/nav/Nav";
import data from "../../data/main";
import { Link } from "react-router-dom";
const Blog = () => {
    return ( 
        <>
        <Nav/>
        <h2>Blog</h2>
        {data.map((article, index) => {
                return (
                    <div key={index}>
                        <img src={article.img_url} alt="" />
                        <h2>{article.title}</h2>
                        <Link to={`/blog/${article.id}`}>Read more</Link>
                    </div>
                )
            })}
        </>
        
    );
}

export default Blog;