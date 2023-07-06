import { useState } from "react";
import "./adminpg.css";
import { db, storage } from "../../../firebase/config";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name: "",
  image: "",
  desc: "",
  type: "",
  startDate: "",
  endDate: "",
};

const AdminPage = () => {
  const [event, setEvent] = useState({ ...initialState });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const docRef = addDoc(collection(db, "events"), {
        name: event.name,
        imageURL: event.image,
        desc: event.desc,
        startDate: event.startDate,
        endDate: event.endDate,
        type: event.type,
      });
      setEvent(initialState);
      toast.success("Event added successfully.");
    } catch (error) {
      // setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="mainWrapper">
      <ToastContainer />
      <div className="containerr adminpg">
        <div className="d-flex  flex-column align-items-center mainn w-100">
          <h1 className="text-center mt-3 mb-5 b-bottom h-color">Admin Page</h1>
          <form
            onSubmit={handleSubmit}
            className="d-flex mb-5 mt-5 flex-column align-items-center p-4 rounded shadow myform"
          >
            <h2 className="h-color">Add Events</h2>
            <div className="w-100">
              <input
                value={event.name}
                name="name"
                onChange={(e) => handelInputChange(e)}
                type="text"
                placeholder="Event Name"
              />
            </div>
            <div className="w-100">
              <input
                value={event.image}
                name="image"
                onChange={(e) => handelInputChange(e)}
                type="text"
                placeholder="Event Image Address"
              />
            </div>
            <textarea
              value={event.desc}
              onChange={(e) => handelInputChange(e)}
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="Event Description"
            ></textarea>
            <div className="Event Date w-100">
              <h4>Start Date</h4>
              <input
                type="date"
                value={event.date}
                name="startDate"
                onChange={(e) => handelInputChange(e)}
              />
            </div>
            <div className="Event Date w-100">
            <h4>End Date</h4>
              <input
                type="date"
                value={event.date}
                name="endDate"
                onChange={(e) => handelInputChange(e)}
              />
            </div>
            <label htmlFor="eventType" style={{ fontSize: "2rem" }}>
                Event Type:
              </label>
              <select
                id="eventType"
                value={event.type}
                name="type"
                onChange={(e) => handelInputChange(e)}
              >
                <option value="">Select an event type</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="past">Past</option>
              </select>
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
