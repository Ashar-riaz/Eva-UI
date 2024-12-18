"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/styles/form.module.css";

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
    <div className="">
      <div className="contact-divider">
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
      className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-md shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className={styles["form-label"]}>
            Enter Your name*
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your name"
            className={styles["form-input"]}
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className={styles["form-label"]}>
            Enter Your email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your email"
            className={styles["form-input"]}
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className={styles["form-label"]}>
            Enter Your subject*
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Enter Your subject"
            className={styles["form-input"]}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Website Input */}
        <div>
          <label htmlFor="website" className={styles["form-label"]}>
            Enter Your website*
          </label>
          <input
            id="website"
            type="text"
            placeholder="Enter Your website"
            className={styles["form-input"]}
            {...register("website")}
          />
          {errors.website && (
            <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>
          )}
        </div>
      </div>

      {/* Comment */}
      <div className="mb-4">
        <label htmlFor="comment" className={styles["form-label"]}>
          Enter your comment
        </label>
        <textarea
          id="comment"
          rows={5}
          placeholder="Enter your comment"
          className={styles["form-input"]}
          {...register("comment")}
        ></textarea>
        {errors.comment && (
          <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>
        )}
      </div>

      {/* Save Checkbox */}
      <div className="flex items-center mb-4">
        <input type="checkbox" id="save" className={styles["checkbox"]} />
        <label htmlFor="save" className="text-sm text-gray-600">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default CommentForm;
