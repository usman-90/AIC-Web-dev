import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Layout from "./Components/layout/layout";
import Router from "./Router/router";



function App() {
  return (
    <>
    <Layout>
      <Router/>
    </Layout>
    </>
  );
}

export default App;
