"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/styles/form.module.css";
import "./contactinput.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  website: string;
  comment: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  website: yup.string().url("Invalid URL").required("Website is required"),
  comment: yup.string().required("Comment cannot be empty"),
});

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div className="container">
        <div className="contact-divider " style={{ marginTop: "100px" }}>
          <div className="contact-divider__line"></div>
          <span className="contact-divider__text">Contact Us</span>
          <div className="contact-divider__line"></div>
        </div>
        <span className="contact-title">
          we are always ready to
          <br />
          help you
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6  border-gray-200 rounded-md shadow-md" style={{marginBottom:"200px"}}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Name Input */}
          <div
            className="d-flex mr-5"
            style={{ marginLeft: "300px", marginTop: "35px" }}
          >
            <div className="flex-row">
              <input
                id="name"
                type="text"
                placeholder="Enter Your name"
                className="input"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 ">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="flex-row" style={{ marginLeft: "30px" }}>
              <input
                id="email"
                type="email"
                placeholder="Enter Your email"
                className="input"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div
            className="d-flex "
            style={{ marginLeft: "300px" }}
          >
            {/* Subject Input */}            
           <div> 
              <input
                id="subject"
                type="text"
                placeholder="Enter Your subject"
                className="input"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Website Input */}
            <div className="" style={{ marginLeft: "30px" }}>
              <input
                id="website"
                type="text"
                placeholder="Enter Your website"
                className="input"
                {...register("website")}
              />
              {errors.website && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.website.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Comment */}
        <div className="mb-4 d-flex" style={{ marginLeft: "300px" }}>
          <textarea
            id="comment"
            rows={5}
            placeholder="Enter your comment"
            className="coment_filed"
            {...register("comment")}
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-xs mt-1">
              {errors.comment.message}
            </p>
          )}
        </div>

        {/* Save Checkbox */}
        <div className="flex items-center mb-4" style={{ marginLeft: "300px" }}>
          <input type="checkbox" id="save" className={styles["checkbox"]} />
          <label htmlFor="save" className="check_text">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Submit Button */}
        <div className=""style={{marginLeft:"300px"}}>
          <button type="submit" className="submit_button">
            <span className="submit_text">Submit</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
