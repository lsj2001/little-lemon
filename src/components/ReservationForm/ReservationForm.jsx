import React, { useState } from 'react';

const ReservationForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 在这里执行提交预定的逻辑
        console.log('Reservation submitted:', { date, time, guests, occasion });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

            <label htmlFor="guests">Number of guests:</label>
            <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

            <label htmlFor="occasion">Occasion:</label>
            <div className="select-container">
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

            <button type="submit">Submit Reservation</button>
        </form>
    );
};

export default ReservationForm;
