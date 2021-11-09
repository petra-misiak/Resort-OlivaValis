import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import './_CalendarPicker.scss';


const CalendarPicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDate = (date) => {
        setStartDate(date);
        setEndDate(null);
    }

    const handleEndDate = (date) => {
        setEndDate(date);
    }

    return (
        <div className={["calendar-picker"]}>
            <div className={["calendar-picker-arrival"]}>
                <label className={["calendar-picker-arrival-lab1"]}>Arrival date</label>
                <DatePicker
                    className={["calendar-picker-arrival-wrapper"]}
                    selected={startDate}
                    minDate={new Date()}
                    showTimeSelect
                    dateFormat="dd/MM/yyyy"
                    onSelect={handleStartDate}
                    onChange={(date) => setStartDate(date)} />
            </div>
            <div className={["calendar-picker-departure"]} >
                <label className={["calendar-picker-departure-lab2"]}>Departure date</label>
                <DatePicker
                    className={["calendar-picker-departure-wrapper"]}
                    selected={endDate}
                    minDate={endDate}
                    onChange={handleEndDate} />
            </div>
            <button className="button">Send inquiry</button>
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