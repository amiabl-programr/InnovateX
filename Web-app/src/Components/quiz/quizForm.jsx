import PropTypes from "prop-types";
import { useState } from "react";

function Form({ handleStartQuiz, handleQuizFormInputChange, input, getQuiz }) {
  function startQuiz() {
    getQuiz();
    handleStartQuiz();
  }
  return (
    <>
      <form action="" className="px-6 pt-12 max-w-xl mx-auto">
        <div className="flex flex-col  w-full">
          <label htmlFor="course">
            What course would you like to be quizzed on?
          </label>
          <select
            name="course_code"
            id="course"
            value={input.course_code}
            placeholder="Select a course"
            onChange={handleQuizFormInputChange}
            className=" border-[#D0D5DD] border-[1px] py-[10px] px-14px rounded-lg outline-none"
          >
            <option value="" defaultValue>
              Select a course
            </option>
            <option value="CSC401">CSC 401</option>
            <option value="CSC403">CSC 403</option>
            <option value="CSC407">CSC 407</option>
            <option value="CSC415">CSC 415</option>
          </select>
        </div>
        {/* <div className="flex flex-col  w-full my-4">
          <label htmlFor="topic">
            What topic would you like to be quizzed on?
          </label>
          <select
            name="topic"
            id="topic"
            value=""
            placeholder="Select a topic"
            // onChange={handleChange}
            className=" border-[#D0D5DD] border-[1px] py-[10px] px-14px rounded-lg outline-none"
          >
            <option value="" defaultValue>
              Select a topic from your course module
            </option>
            <option value="CSC 201">CSC 201</option>
            <option value="CSC 203">CSC 203</option>
          </select>
        </div> */}

        <button
          type="submit"
          className="bg-pry-col py-2 px-8 lg:py-[18px] lg:px-20 
                  rounded-lg text-white "
          onClick={startQuiz}
        >
          Generate Quiz
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleStartQuiz: PropTypes.func,
  handleQuizFormInputChange: PropTypes.func,
  getQuiz: PropTypes.func,
  input: PropTypes.object,
};

export default Form;
