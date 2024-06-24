const MOVIE_API_IMAGES_PATH = 'https://image.tmdb.org/t/p/original/';

export const MovieResults = ({ results }) => {
    return (
        <section>
            <h2>Movies</h2>
            <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {results.length > 0 && results.map((movie, index) => {
                    return (<div key={movie.id} style={{ backgroundColor: 'blue', width: 'fit' }}>
                        <h3>{movie.original_title} ({movie.title})</h3>
                        {movie.poster_path != null && <img style={{ maxWidth: '100px', minHeight: '150px' }} src={`${MOVIE_API_IMAGES_PATH}${movie.poster_path}`} alt={`${movie.original_title} Poster`} />}
                        <p>Release Year: {movie.release_date.split("-")[0]}</p>
                    </div>)
                })}
                {results.length == 0 && <><h3>No movie results yet!</h3><p>Type the name of your movie above to start searching</p></>}
            </div>
        </section>
    )
}
