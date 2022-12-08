import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id,coverimg,title,summary,genres}) {
    return (
        <div style={{ border:"1px solid", marginBottom:"10px"}}>
            <img src={coverimg} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    coverimg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie