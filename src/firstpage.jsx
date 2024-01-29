import React, { useState } from 'react';
import './firstpage.css';
import frame17 from './frame17.png';
import calendar from './CalendarBlank.svg';
import MapPinLine from './MapPinLine.svg';
import clock from './Clock.svg';

export const FirstPage = () => {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({});

  const [jobDetails, setJobDetails] = useState({
    date: '',
    location: '',
    title: '',
    description: '',
    jobType: '',
    price: '',
    jobRole: '',
  });

  const handleOpenCreateJob = () => {
    setIsCreateJobOpen(true);
  };

  const handleCloseCreateJob = () => {
    setIsCreateJobOpen(false);
    setFieldErrors({}); // Reset field errors when closing the create job form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
    // Clear the error message when the user starts typing
    setFieldErrors({
      ...fieldErrors,
      [name]: '',
    });
  };

  const handleSaveJob = () => {
    // Validate fields before saving
    const errors = {};
    Object.keys(jobDetails).forEach((key) => {
      if (!jobDetails[key]) {
        errors[key] = 'Field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      // If there are errors, update state and prevent saving
      setFieldErrors(errors);
    } else {
      // If no errors, save the job and reset state
      setJobList([...jobList, jobDetails]);
      setJobDetails({
        date: '',
        location: '',
        title: '',
        description: '',
        jobType: '',
        price: '',
        jobRole: '',
      });
      setIsCreateJobOpen(false);
      setFieldErrors({});
    }
  };

  return (
    <div>
      <nav></nav>
      <button className="create-job-button" onClick={handleOpenCreateJob}>
        Create a Job
      </button>

      {!isCreateJobOpen ? (
        <div className="frame">
        <img className="img" alt="Frame" src={frame17} />
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <div className="div-wrapper">
                <div className="text-wrapper">Straca Burkina-Faso</div>
              </div>
              <div className="div-4">
                <div className="text-wrapper-2">Chef de chantier</div>
                <div className="div-wrapper-2">
                  <div className="text-wrapper-3">Nouveau poste</div>
                </div>
              </div>
            </div>
            <div className="div-5">
              <div className="div-6">
                <img className="img-2" alt="Map pin line" src={MapPinLine} />
                <div className="text-wrapper-4">Burkina-Faso</div>
              </div>
              <div className="ellipse" />
              <div className="div-6">
                <img className="img-2" alt="Clock" src={clock} />
                <div className="text-wrapper-5">Plein temps</div>
              </div>
              <div className="ellipse" />
              <div className="div-6">
                <div className="img-2">
                  <div className="overlap-group">
                    <img className="vector-stroke" alt="Vector stroke" src="vector-stroke.svg" />
                    <div className="text-wrapper-6">F</div>
                  </div>
                </div>
                <div className="text-wrapper-5">800k</div>
              </div>
              <div className="ellipse" />
              <div className="div-6">
                <img className="img-2" alt="Calendar blank" src={calendar} />
                <p className="text-wrapper-5">Il y a 29 min</p>
              </div>
            </div>
          </div>
          <p className="p">
            Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod
            eiusmod culpa. laborum tempor Lorem incididunt.
          </p>
        </div>
      </div>
      ) : (
        <div className="create-job-form">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={jobDetails.date}
            onChange={handleInputChange}
            className={fieldErrors.date ? 'error' : ''}
          />
          {fieldErrors.date && <div className="error-message">{fieldErrors.date}</div>}

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleInputChange}
            className={fieldErrors.location ? 'error' : ''}
          />
          {fieldErrors.location && <div className="error-message">{fieldErrors.location}</div>}

          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={jobDetails.title}
            onChange={handleInputChange}
            className={fieldErrors.title ? 'error' : ''}
          />
          {fieldErrors.title && <div className="error-message">{fieldErrors.title}</div>}

          <label>Description:</label>
          <textarea
            name="description"
            value={jobDetails.description}
            onChange={handleInputChange}
            className={fieldErrors.description ? 'error' : ''}
          />
          {fieldErrors.description && <div className="error-message">{fieldErrors.description}</div>}

          <label>Job Type:</label>
          <select
            name="jobType"
            value={jobDetails.jobType}
            onChange={handleInputChange}
            className={fieldErrors.jobType ? 'error' : ''}
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
          {fieldErrors.jobType && <div className="error-message">{fieldErrors.jobType}</div>}

          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={jobDetails.price}
            onChange={handleInputChange}
            className={fieldErrors.price ? 'error' : ''}
          />
          {fieldErrors.price && <div className="error-message">{fieldErrors.price}</div>}

          <label>Job Role:</label>
          <input
            type="text"
            name="jobRole"
            value={jobDetails.jobRole}
            onChange={handleInputChange}
            className={fieldErrors.jobRole ? 'error' : ''}
          />
          {fieldErrors.jobRole && <div className="error-message">{fieldErrors.jobRole}</div>}

          <div className="buttons-container">
            <button className="cancel-button" onClick={handleCloseCreateJob}>
              Cancel
            </button>
            <button className="confirm-button" onClick={handleSaveJob}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
