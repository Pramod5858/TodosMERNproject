import React from 'react'

export default function Footer() {
    return (
        <div>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/image12.jpg" className="d-block w-100" alt="not found1" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image13.jpg" className="d-block w-100" alt="not found2" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image14.jpg" className="d-block w-100" alt="not found3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

        </div>
    )
}
