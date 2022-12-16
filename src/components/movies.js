import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "../css/movies.css";

function Movie({id,coverimg,title,summary,genres}) {
    return (
        <div className="main_div">
            <img src={coverimg} className="cover_img"/>
            <div className="text_div">
                <h2><Link className="link_text" to={`/movie/${id}`}>{title}</Link></h2>
                <p>{summary.length > 200 ? `${summary.slice(0,200)} .....` : summary}</p>
                <ul>
                    {genres.map((g) => (<li key={g}>{g}</li>))}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    coverimg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie