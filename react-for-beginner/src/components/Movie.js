import { Link } from "react-router-dom";

function Movie({id, title, coverImage, summary, genres}){
    return (
        <div key={id}>
                <h2>
                    <Link to={`movie/{id}`}>{title}</Link>
                </h2>
                <img src={coverImage} alt={title}/>
                <p>{summary}</p>
                <ul>
                    {
                        genres.map((g)=>(
                            <li key={g}>{g}</li>
                        ))
                    }
                </ul>
            </div>
    )
}

export default Movie;