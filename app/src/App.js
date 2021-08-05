import React from "react";
import AppDetails from "./components/AppList";
const Header = React.lazy(() => import("header/Header"));
const Body = React.lazy(() => import("body/Body"));

const App = () => {
  const [name, setName] = React.useState("");
  const [num1, setNum1] = React.useState();
  const [num2, setNum2] = React.useState();

  return (
    <div>
      <h1>React Microfrontend</h1>
      <React.Suspense fallback={<>Loading...</>}>
        <Header />
      </React.Suspense>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "wheat",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Num1" onChange={(e) => setNum1(e.target.value)} />
        <input placeholder="Num2" onChange={(e) => setNum2(e.target.value)} />
      </div>
      <React.Suspense fallback={null}>
        <Body name={name} num1={num1} num2={num2} />
      </React.Suspense>
      <hr />
      <hr />
      <AppDetails />
    </div>
  );
};

export default App;
