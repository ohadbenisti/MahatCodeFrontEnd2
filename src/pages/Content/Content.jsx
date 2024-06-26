import React, { useState } from "react";
import CoursesComponent from "../../features/Courses";
import QuestionTable from "../../features/QuestionTable";
import FilteredQuestions from "../../features/FilteredQuestions";
import useLogin from "../../hooks/useLogin";
import TypeEffect from "./TypeEffect";
import "./Content.css"; // ייבוא של קובץ ה-CSS

const Content = () => {
  const [filter, setFilter] = useState("");
  const userInfo = useLogin();
  const counter = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://bringthemhomenow.net/1.1.0/hostages-ticker.js";
    script.setAttribute(
      "integrity",
      "sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne"
    );
    script.setAttribute("crossorigin", "anonymous");
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  counter();
  return (
    <>
      <div id="bthn" lang="he"></div>
      <div className="content-background">
        <div className="content-body">
          <div className="container">
            <TypeEffect />
            <h2 className="title">תכניות לימוד</h2>
            <CoursesComponent />
            <h2 className="title"></h2>
            <div className="my-4">
              <FilteredQuestions setFilter={setFilter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
