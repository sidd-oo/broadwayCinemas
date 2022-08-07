import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./CinemaGrid.css"

const CinemaGrid = () => {
    const location = useLocation();
    const movie = location.state;

    const rows = ["A", "B", "C", "D", "E", "F"];
    const columns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    const ticketPrice = 120;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [countSelectedSeats, setCountSelectedSeats] = useState(0);
    const [timeSlot, setTimeSlot] = useState(null);
    const initialSeatState = {
        timeSlot,
        selectedSeats,
        movieName: movie.title
    };
    const [seatState, setSeatState] = useState(initialSeatState);

    useEffect(() => {
        const updateState = () => {
            setSeatState({ ...seatState, timeSlot: timeSlot, selectedSeats: selectedSeats });
        }
        updateState();
    }, [timeSlot, selectedSeats, render]);

    const localStorageData = localStorage.getItem(`${movie.title}/${timeSlot}`) || null;
    useEffect(() => {
        const fetchData = () => {
            if (localStorageData !== null) {
                setSeatState(JSON.parse(localStorageData));
            }
        }
        fetchData();
    }, [localStorageData])


    const handleTimeSlot = (e) => {
        setTimeSlot(e.target.id);
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const handleSelectSeat = (e) => {
        setSelectedSeats([...selectedSeats, e.target.id].filter(unique));
        setSeatState({ ...seatState, selectedSeats });
        setCountSelectedSeats(selectedSeats.length);
    }

    const handleBook = (e) => {
        e.preventDefault();
        if(localStorageData === null){
            localStorage.setItem(`${seatState.movieName}/${seatState.timeSlot}`, JSON.stringify(seatState));
        }
        setRender(!render);
        alert(`Your selected seats, i.e ${selectedSeats} seats for a price of $${ticketPrice * countSelectedSeats} for the ${timeSlot} show is booked successfully. See you in Cinema!`);
    }

    console.log(seatState);
    return (
        <div className="cinemaGrid">
            <div className="cinemaGrid-top">
                <div className="cinemaGrid-top-left">
                    <h1 id="movieTitle">{movie.title} <span id="ageCertificate">{movie.ageCertificate}</span></h1>
                    <h2 id="show-schedule">Tommorow, 7th August 2022</h2>
                    <div className='timeBtnContainer' onClick={(e) => { handleTimeSlot(e) }}>
                        <button className='timeBtn' id="5:00PM">5:00 PM</button>
                        <button className='timeBtn' id="6:00PM">6:00 PM</button>
                        <button className='timeBtn' id="7:00PM">7:00 PM</button>
                    </div>
                </div>
                <div className="cinemaGrid-top-right">
                    <Link to="/" className="link" style={{ color: "grey", textDecoration: "underline" }}>Go back to All Movies</Link>
                    <ul className="showcase">
                        <li>
                            <div className="seat"></div>
                            <small>Available</small>
                        </li>

                        <li>
                            <div className="seat selected"></div>
                            <small>Selected</small>
                        </li>

                        <li>
                            <div className="seat sold"></div>
                            <small>Sold</small>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="cinemaGrid-bottom">
                <div className="seat-container">
                    <div className="row">
                        {columns.map((col, j) => {
                            return (j === 0 ?
                                <div className="marking number" key={j}></div>
                                : (j > 0 && j < 10 ? (<div className="marking number" key={j}>&nbsp;{col}</div>)
                                    : (<div className="marking number" key={j}>{col}</div>)))
                        })}
                    </div>
                    {rows.reverse().map((row, i) => {
                        return (<div className="row" key={i} onClick={(e) => { handleSelectSeat(e) }}>
                            {columns.map((col, j) => {
                                if (j === 0) {
                                    return (<div key={j} className="marking alphabet">{row}</div>)
                                } else {

                                    return (<div key={j} className={selectedSeats.includes(`${row}${col}`) === true ? "seat selected": "seat"} id={`${row}${col}`}></div>)
                                }
                            })}
                        </div>)
                    })}
                    <div className="screen"></div>
                </div>
                <div className="cinemaGrid-bottom-end">
                    <p className="bookingInfo">
                        You have selected <span id="seatNumbers">{`${countSelectedSeats} seats, i.e `}{selectedSeats.map((seat, i) => {
                            return (<span key={i}>{seat},</span>)
                        })}</span> seats for a price of $<span id="total">{ticketPrice * countSelectedSeats}</span> for the <span id="timeSlot">{timeSlot}</span> show.
                    </p>
                    <p className="bookingInfo" style={{display:"none"}}>
                        You have selected <span id="seatNumbers">{`${countSelectedSeats} seats, i.e `}{selectedSeats.map((seat, i) => {
                            return (<span key={i}>{seat},</span>)
                        })}</span> seats for a price of $<span id="total">{ticketPrice * countSelectedSeats}</span> for the <span id="timeSlot">{timeSlot}</span> show.
                    </p>
                    <button className="submitBtn" disabled={countSelectedSeats === 0 ? "true" : (timeSlot === null ? true : false)} onClick={(e) => {
                        handleBook(e)
                    }}>
                        Book Now!
                    </button>
                </div>
            </div>

        </div >
    )
}

export default CinemaGrid