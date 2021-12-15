/* import React from 'react';

Table.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    icon: PropTypes.string,
    borderColor: PropTypes.string,
}

export default function Table ({
    id = "No id", 
    title = "No hay datos", 
    borderColor = "danger", 
    icon = "fa-shopping-cart", 
    quantity = 0,
    array = []
}) {
    return (
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${borderColor} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {title}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{quantity}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                            </div>
                            <ul>
                                {
                                    array.length > 0 ? array.map(item => <li>{item}</li>) : "Array vacío"
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} */