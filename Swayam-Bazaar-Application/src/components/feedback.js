import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../css/feedback.css';

// import FeedbackModel from "../../models/Schema";
export default function Feedback() {
  const formik = useFormik({
    initialValues: {
      ordernumber: "",
      rating: "",
      productfeedback: "",
      deliveryfeedback: ""
    },
    onSubmit
  })


  const port = process.env.REACT_APP_API_PORT || 3001;
  async function onSubmit(values) {
    // const directory = process.env.SITE_URL || "localhost:3001"
    axios.post(`http://localhost:${port}/feedback`, values)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    // console.log(values)
  }
  return (

    <div class="container1">
      <Link to="/feed"> <button className="px-4 py-2 bg-green-700 text-white absolute rounded-lg top-10 left-10">
        Check All Feedbacks
      </button></Link>
      <div class="contact-box flex justify-center w-full m-5">
        <div class="left"></div>
        <div class="right">
          <h2 class="font-bold text-lg">Product and Delivery Feedback</h2>
          <form onSubmit={formik.handleSubmit} className="feedback-form">
            <div className="mb-4">
              <label htmlFor="order-number" className="flex justify-start pt-2 ps-1 mb-1 text-slate-950">
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
              <label htmlFor="rating" className="flex justify-start ps-1 mb-1 text-slate-950">
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
                className="flex justify-start ps-1 mb-1 text-slate-950"
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
                className="flex justify-start ps-1 mb-1 text-slate-950"
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
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}