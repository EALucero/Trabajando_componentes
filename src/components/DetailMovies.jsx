import React from 'react';
import PropTypes from 'prop-types';

DetailMovies.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    length: PropTypes.number,
    rating: PropTypes.number,
    genre: PropTypes.string,
    awards: PropTypes.number,
}

export default function DetailMovies({
    id = "No id",
    title = "No hay datos",
    length = "",
    rating = "",
    genre = [],
    awards = "",
}) {
    return (
        <React.Fragment>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{length}</td>
                <td>{rating}</td>
                <td>{genre.length > 0 ? genre.map(item => <li>{item}</li>) : "Array vacío"}</td>
                <td>{awards}</td>
            </tr>
        </React.Fragment>
    )
}