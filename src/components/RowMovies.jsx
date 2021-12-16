import React from 'react';
import DetailMovies from "./DetailMovies"

const rowsContent = [
    {
        id: 1,
        title: "Billy Elliot",
        length: 123,
        rating: 5,
        genre: ["Drama", "Comedia"],
        awards: 2
    },
    {
        id: 2,
        title: "Alicia en el país de las maravillas",
        length: 142,
        rating: 4.8,
        genre: ["Drama", "Acción", "Comedia"],
        awards: 3
    },
]

export default function RowMovies() {
    return (
        <React.Fragment>
            {
                rowsContent.map((item) => (
                    <DetailMovies
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        length={item.length}
                        rating={item.rating}
                        genre={item.genre}
                        awards={item.awards}
                    />
                ))
            }
        </React.Fragment>
    )
}