import "./adminpg.css";

const AdminPage = () => {
  return (
    <div>
      <div className="containerr adminpg">
        <div className="d-flex  flex-column align-items-center main w-100">
          <h1 className="text-center mt-3 mb-5 b-bottom h-color">Admin Page</h1>
          <form className="d-flex mb-5 mt-5 flex-column align-items-center p-4 rounded shadow myform">
            <h2 className="h-color">Add Events</h2>
            <div className="w-100">
              <input type="text" placeholder="Event Name" />
            </div>
            <div className="w-100">
              <input type="text" placeholder="Event Image Address" />
            </div>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="Event Description"
            ></textarea>
            <div className="Event Date w-100">
              <input type="date" />
            </div>
            <button type="submit" className="my-5 --btn --btn-primary --btn-block">
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
