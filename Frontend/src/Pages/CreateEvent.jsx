import { Loader, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEventStore } from "../store/useEventStore";
import { useNavigate } from "react-router-dom";

function CreateEvent() {

  const {createEvent,isLoading} = useEventStore();
  const navigate = useNavigate(); 
  const [selectedImg, setSelectedImg] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    capacity: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return toast.error("Name is required");
    if (!formData.description.trim())
      return toast.error("Description is required");
    if (!formData.date.trim()) return toast.error("Date is required");
    if (!formData.location.trim()) return toast.error("Location is required");
    if (!formData.capacity.trim()) return toast.error("Capacity is required");
    if (!formData.category.trim()) return toast.error("Category is required");

    return true;
  };

  const handleImageChange= async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      console.log("profile:", base64Image);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      await createEvent({
        ...formData,
        imageUrl: selectedImg,
      });

      navigate("/dashboard");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-lime-600">
        Create New Event
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Event Image</span>
          </label>
          <div className="flex flex-col items-center gap-4">
            {selectedImg ? (
              <img
                src={selectedImg}
                alt="Preview"
                className="h-1/2 w-1/2 border border-gray-300"
              />
            ) : (
              <Upload className="h-10 w-10 text-lime-600" />
            )}
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div> */}
        <div className="form-control p-4 rounded-lg ">
          <label className="label">
            <span className="label-text font-semibold text-lg text-lime-600">
              Event Image
            </span>
          </label>
          <div className="flex flex-col items-center gap-4">
            {selectedImg ? (
              <img
                src={selectedImg}
                alt="Preview"
                className="h-40 w-40 object-cover rounded-lg border-4 border-lime-500 shadow-md"
              />
            ) : (
              <Upload className="h-14 w-14 text-lime-600 cursor-pointer hover:text-lime-800 transition duration-300" />
            )}
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs bg-gray-100 text-lime-600 border-lime-600 focus:ring-lime-600 rounded-lg p-2"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Event Title</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter event title"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div> */}
        <div className="form-control p-4 rounded-lg  ">
          <label className="label">
            <span className="label-text font-semibold text-lg text-lime-600">
              Event Title
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter event title"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full sm:max-w-sm lg:max-w-full bg-gray-100 text-gray-500 border-gray-500 focus:ring-gray-500 rounded-lg p-3 mt-2"
          />
        </div>

        <div className="form-control p-4 rounded-lg  bg-white">
          <label className="label">
            <span className="label-text font-semibold text-lg text-lime-600">
              Event Description
            </span>
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Describe your event"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full max-w-xs lg:max-w-[800px] bg-gray-100 text-gray-500 border-gray-500 focus:ring-gray-500 rounded-lg p-3 mt-2 resize-none"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg  bg-white">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-lime-600">
                Date and Time
              </span>
            </label>
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-500 border-gray-500 focus:ring-gray-500 rounded-lg p-3"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lime-600 font-semibold text-lg">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-500 border-gray-500 focus:ring-gray-600 rounded-lg p-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg  bg-white">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-lime-600">
                Category
              </span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select select-bordered w-full bg-gray-100 text-gray-500 border-gray-400 focus:ring-gray-500 focus:border-gray-500 rounded-lg p-3"
            >
              <option value="">Select a category</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="networking">Networking</option>
              <option value="social">Social</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lime-600 font-semibold text-lg">Capacity</span>
            </label>
            <input
              type="number"
              name="capacity"
              placeholder="Enter capacity"
              value={formData.capacity}
              onChange={handleChange}
              min={1}
              className="input input-bordered w-full bg-gray-100 text-gray-600 border-gray-600 focus:ring-gray-500 rounded-lg p-3"
            />
          </div>
        </div>

        <div className="flex justify-end ">
        <button
  type="submit"
  className="btn btn-primary btn-block md:w-1/4 bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 border-0"
  disabled={isLoading}
>
          
            {isLoading ? (
              <>
                <Loader className="mr-2 animate-spin" />
                Adding...
              </>
            ) : (
              "Create Event"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
