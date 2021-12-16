import React from 'react';
import RowMovies from "./RowMovies"

export default function TableMovies() {
    return (
        <React.Fragment>
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 ml-4">
                        <h5 className="m-0 font-weight-bold text-gray-800">All the movies in the Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Duración</th>
                                        <th>Rating</th>
                                        <th>Genero</th>
                                        <th>Premios</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <RowMovies />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}