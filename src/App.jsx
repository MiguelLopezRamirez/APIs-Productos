import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const App = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>📘 Documentación API de Productos</h1>
      <SwaggerUI url="/swagger.yaml" />
    </div>
  );
};

export default App;
