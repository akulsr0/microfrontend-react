import React from "react";
import { APPS } from "../constants";
import AppDetail from "./AppDetail";

const AppDetails = () => {
  return (
    <div>
      {APPS.map((app) => (
        <AppDetail key={app.title} color={app.color} title={app.title} />
      ))}
    </div>
  );
};

export default AppDetails;
