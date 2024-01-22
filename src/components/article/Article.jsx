import { Link, useParams } from "react-router-dom";
import data from "../../data/main";

const Article = () => {
    const idParam = useParams()

    const rightArticle = data.filter((article) => {
        return article.id === Number(idParam.id)
    })
    return(
        <>
        <div>
            <img src={rightArticle[0].img_url} alt="" />
                <div>
                    <h2>{rightArticle[0].title}</h2>
                    <p>{rightArticle[0].published_date}</p>
                </div>
                    <p>{rightArticle[0].description}</p>
                    <h4>By {rightArticle[0].author}</h4>
                </div>
            <Link to='/blog'>Back to all Articles</Link>
        </>
    )
}

export default Article