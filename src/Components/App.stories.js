import React from "react";
import App from "./App";

export default {
  title: "App",
  component: App,
};

export const Hello = () => <App />;

Hello.story = {
  name: "Hello example",
};
