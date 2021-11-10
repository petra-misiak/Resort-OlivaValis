import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { db } from '../../firebase/config';
import "react-datepicker/dist/react-datepicker.css";
import './_CalendarPicker.scss';


const CalendarPicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [loader, setLoader] = useState(false);

    const handleStartDate = (date) => {
        setStartDate(date);
        setEndDate(null);
    }
    const handleEndDate = (date) => {
        setEndDate(date);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("booking dates").add({
            startDate: startDate,
            endDate: endDate,
        })
            .then(() => {
                alert('Thank you, please wait for our confirmation');
            })
            .catch((error) => {
                alert(error.message);
            });

        setStartDate('');
        setEndDate('');
    };

    return (
        <div className={["calendar-picker"]} >
            <div className={["calendar-picker-all"]}>
                <div className={["calendar-picker-all-arrival"]}>
                    <label className={["calendar-picker-all-arrival-lab1"]}>Arrival date</label>
                    <DatePicker
                        className={["calendar-picker-all-arrival-wrapper"]}
                        selected={startDate}
                        minDate={new Date()}
                        showTimeSelect
                        dateFormat="dd/MM/yyyy"
                        onSelect={handleStartDate}
                        onChange={(date) => setStartDate(date)} />
                </div>
                <div className={["calendar-picker-all-departure"]} >
                    <label className={["calendar-picker-all-departure-lab2"]}>Departure date</label>
                    <DatePicker
                        className={["calendar-picker-all-departure-wrapper"]}
                        selected={endDate}
                        minDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={handleEndDate} />
                </div>
                <button type="submit" className="button" onClick={handleSubmit}>Send inquiry</button>
            </div>

            {/* {startDate && endDate && (
                <div className="summary">
                    <p>
                        You book a hotel from {moment(startDate).format("LL")} to{" "}
                        {moment(endDate).format("LL")}.
                    </p>
                </div>
            )} */}
        </div>

    );
};

export default CalendarPicker;