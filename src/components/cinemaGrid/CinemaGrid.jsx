import React from 'react'
import { Link } from 'react-router-dom'
import "./CinemaGrid.css"

const CinemaGrid = () => {
    return (
        <div className="cinemaGrid">
            <div className="cinemaGrid-top">
                <div className="cinemaGrid-top-left">
                    <h1>Movie name <span>U/A</span></h1>
                    <h2>Tommorow, 7th August 2022</h2>
                    <div className='timeBtnContainer'>
                        <button className='timeBtn'>5:00 PM</button>
                        <button className='timeBtn'>6:00 PM</button>
                        <button className='timeBtn'>7:00 PM</button>
                    </div>
                </div>
                <div className="cinemaGrid-top-right">
                    <Link  to="/" className="link" style={{color:"grey", textDecoration:"underline"}}>Go back to All Movies</Link>
                    <ul class="showcase">
                        <li>
                            <div class="seat"></div>
                            <small>Available</small>
                        </li>

                        <li>
                            <div class="seat selected"></div>
                            <small>Selected</small>
                        </li>

                        <li>
                            <div class="seat sold"></div>
                            <small>Sold</small>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="cinemaGrid-bottom">
                <div class="seat-container">
                    <div class="row">
                        <div class="marking number"></div>
                        <div class="marking number">1</div>
                        <div class="marking number">2</div>
                        <div class="marking number">3</div>
                        <div class="marking number">4</div>
                        <div class="marking number">5</div>
                        <div class="marking number">6</div>
                        <div class="marking number">7</div>
                        <div class="marking number">8</div>
                        <div class="marking number">9</div>
                        <div class="marking number">10</div>
                        <div class="marking number">11</div>
                        <div class="marking number">12</div>
                        <div class="marking number">13</div>
                        <div class="marking number">14</div>
                        <div class="marking number">15</div>
                        <div class="marking number">16</div>
                        <div class="marking number">17</div>
                    </div>
                    <div class="row">
                        <div class="marking alphabet">E</div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat selected"></div>
                        <div class="seat sold"></div>                    <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <div class="marking alphabet">D</div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                    </div>

                    <div class="row">
                        <div class="marking alphabet">C</div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>                    <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>                    <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>

                    <div class="row">
                        <div class="marking alphabet">C</div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                    </div>

                    <div class="row">
                        <div class="marking alphabet">B</div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                    </div>

                    <div class="row">
                        <div class="marking alphabet">A</div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat sold"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="screen"></div>
                </div>
                <div className="cinemaGrid-bottom-end">
                    <h1></h1>
                    <button className="submitBtn">
                        Book Now!
                    </button>
                </div>
            </div>

        </div >
    )
}

export default CinemaGrid