import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import Application from "./SurveyComponent";


const root = createRoot(document.getElementById("surveyElement"));
root.render(<Application />);