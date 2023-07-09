import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from 'axios'
// import FeedbackModel from "../../models/Schema";
export default function Feedback() {
    const formik=useFormik({
        initialValues: {
          ordernumber: "",
          rating:"",
          productfeedback:"",
          deliveryfeedback:""
        },
        onSubmit
      })


      const port = process.env.REACT_APP_API_PORT || 3001;
      async function onSubmit(values){
        // const directory = process.env.SITE_URL || "localhost:3001"
       axios.post(`http://localhost:${port}/feedback`,values)
       .then(result => console.log(result))
       .catch(err => console.log(err))
        // console.log(values)
      }
    return (
        <div>
      <Link to="/feed"> <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4 mt-3 ml-3">
        Check All Feedbacks
      </button></Link>

      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Product and Delivery Feedback
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="order-number" className="block mb-1 text-gray-700">
              Order Number
            </label>
            <input
              type="text"
              id="ordernumber"
              name="ordernumber"
              placeholder="Enter your order number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...formik.getFieldProps('ordernumber')}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block mb-1 text-gray-700">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...formik.getFieldProps('rating')}>
              <option value="">Select a rating</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="below average">Below Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="productfeedback"
              className="block mb-1 text-gray-700"
            >
              Product Feedback
            </label>
            <textarea
              id="productfeedback"
              name="productfeedback"
              rows="4"
              placeholder="Enter your feedback about the product"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...formik.getFieldProps('productfeedback')}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="deliveryfeedback"
              className="block mb-1 text-gray-700"
            >
              Delivery Feedback
            </label>
            <textarea
              id="deliveryfeedback"
              name="deliveryfeedback"
              rows="4"
              placeholder="Enter your feedback about the delivery"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...formik.getFieldProps('deliveryfeedback')}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}