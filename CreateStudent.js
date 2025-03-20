import { Link } from "react-router-dom";

export default function CreateStudent(){
    return(
        <div className="container">
            <h2>Add New Student</h2>
            <form>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id"/>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"/>

                <label htmlFor="place">Place:</label>
                <input type="text" id="place" name="place"/>

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone"/>

                <div>
                <button className="btn btn-save">Save</button>
                <Link to="/" className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    )
}