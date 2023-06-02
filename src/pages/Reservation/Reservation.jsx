import React, { useState } from 'react';
import './Reservation.css';
import { useNavigate } from "react-router-dom";

const Reservation = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    // const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const openingTime = '09:00';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            if (step === 1) {
                setStep(2);
            } else if (step === 2) {
                setStep(3);
            } else if (step === 3) {
                // try {
                //     const response = await fetch('https://your-api-url.com/reservations', {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json'
                //         },
                //         body: JSON.stringify({ date, time, guests, occasion, firstName, lastName, phone })
                //     });

                //     if (response.ok) {
                //         console.log('Reservation submitted:', { date, time, guests, occasion, firstName, lastName, phone });
                //         setSuccess(true);
                //         setTimeout(() => {
                //             setSuccess(false);
                //             navigate('/')
                //         }, 2000);
                //     } else {
                //         // console.error('Failed to submit reservation');
                //         setSuccess(true);
                //         setTimeout(() => {
                //             setSuccess(false);
                //             navigate('/')
                //         }, 2000);
                //     }
                // } catch (error) {
                //     console.error('Error:', error);
                //     setSuccess(true);
                //     setTimeout(() => {
                //         setSuccess(false);
                //         navigate('/')
                //     }, 2000);
                // }
                console.log('Reservation submitted successfully!', { date, time, guests, occasion, firstName, lastName, phone });
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    // navigate('/')
                }, 2000);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!date) {
            errors.date = 'Date is required.';
        } else {
            const today = new Date().toISOString().split('T')[0];
            if (date < today) {
                errors.date = 'Please select a date today or in the future.';
            }
        }

        if (!time) {
            errors.time = 'Time is required.';
        } else {
            if (time < openingTime) {
                errors.time = 'Please select a time after the opening time.';
            }
        }

        if (!guests) {
            errors.guests = 'Number of guests is required.';
        } else {
            if (guests < 1) {
                errors.time = 'Number of guests is required.';
            }
        }

        if (step === 2) {
            if (!firstName) {
                errors.firstName = 'First Name is required.';
            }
            if (!lastName) {
                errors.lastName = 'Last Name is required.';
            }
            if (!phone) {
                errors.phone = 'Phone is required.';
            }
        }

        return errors;
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log(3)
            setStep(step + 1);
        } else {
            setErrors(validationErrors);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
        setErrors({});
    };


    return (
        <div>
            {success && <p className="success-message">Reservation submitted successfully!</p>}
            <h1>Reservation</h1>
            {step === 1 && (<form onSubmit={handleNextStep}>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                {errors.date && <span className="error">{errors.date}</span>}
                {errors.date && <span className="error-tip">Tip: Please select a date today or in the future.</span>}
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                {errors.time && <span className="error">{errors.time}</span>}
                {errors.time && <span className="error-tip">Tip: Please select a time after 9:00AM.</span>}
                <label htmlFor="guests">Number of guests:</label>
                <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
                {errors.guests && <span className="error">{errors.guests}</span>}
                {errors.guests && <span className="error-tip">Tip: Please enter the number of guests.</span>}
                <label htmlFor="occasion">Occasion:</label>
                <div className="select-container">
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <div className="button-container">
                    <button type="submit">Next</button>
                </div>
            </form>)}
            {step === 2 && (
                <form onSubmit={handleNextStep}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                    {errors.firstName && <span className="error-tip">Tip: Please enter your first name.</span>}
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                    {errors.lastName && <span className="error-tip">Tip: Please enter your last name.</span>}
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                    {errors.phone && <span className="error-tip">Tip: Please enter your phone number.</span>}
                    <div className="button-container">
                        <button type="button" onClick={handlePreviousStep}>Previous</button>
                        <br />
                        <button type="submit">Next</button>
                    </div>
                </form>
            )}
            {step === 3 && (
                <div className="review">
                    <h2>Review Information</h2>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Number of Guests: {guests}</p>
                    <p>Occasion: {occasion}</p>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Phone: {phone}</p>

                    <button type="button" onClick={handlePreviousStep}>Previous</button>
                    <br />
                    <button type="submit" onClick={handleSubmit}>Submit Reservation</button>
                    <br />
                </div>
            )}
        </div>
    );
};

export default Reservation;
