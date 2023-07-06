import { useState } from "react";
import "./adminpg.css";

const AdminPage = () => {
  const [eventName, setEventName] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventDate, setEventDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDetails = {
      name: eventName,
      image: eventImage,
      description: eventDesc,
      date: eventDate,
    };
    console.log(eventDetails);
  };
  return (
    <div>
      <div className="containerr adminpg">
        <div className="d-flex  flex-column align-items-center main w-100">
          <h1 className="text-center mt-3 mb-5 b-bottom h-color">Admin Page</h1>
          <form
            onSubmit={handleSubmit}
            className="d-flex mb-5 mt-5 flex-column align-items-center p-4 rounded shadow myform"
          >
            <h2 className="h-color">Add Events</h2>
            <div className="w-100">
              <input
                value={eventName}
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
                type="text"
                placeholder="Event Name"
              />
            </div>
            <div className="w-100">
              <input
                value={eventImage}
                onChange={(e) => {
                  setEventImage(e.target.value);
                }}
                type="text"
                placeholder="Event Image Address"
              />
            </div>
            <textarea
              value={eventDesc}
              onChange={(e) => {
                setEventDesc(e.target.value);
              }}
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="Event Description"
            ></textarea>
            <div className="Event Date w-100">
              <input
                type="date"
                value={eventDate}
                onChange={(e) => {
                  setEventDate(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="my-5 --btn --btn-primary --btn-block"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
