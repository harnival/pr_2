import { useEffect } from "react";
import {Link, useParams} from "react-router-dom";

function Detail() {
    const x = useParams();
    const getMovies = async ()=> {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
        ).json();
    };
    useEffect(() => {
        getMovies();
    });

    return (
        <div>
            <h1>Detail</h1>
            <h3>
                <Link to="/"> Back </Link>
            </h3>
        </div>
    )
}

export default Detail