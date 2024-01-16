import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Inicio = () => {
  // Hooks
  // useStage

  // const [nombre, setNombre] = useState("ivan");
  // const [numero, setNumero] = useState(12);
  // const handelClick = () => {
  //   setNombre("Cisco");
  //   console.log(nombre);
  // };
  // const handelClickEdad = () => {
  //   setNumero(21)
  // };
  // const handelClickOtro = (input) => {
  //   console.log("Te saludo " + input);
  // };

  const {
    sotad: blogs,
    cargando,
    error,
  } = useFetch("http://localhost:8000/blogs");

  //Props
  return (
    <div className="home">
      {cargando && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} titulo="Listado de Blogs" />}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.autor === "Ivan")}
        titulo="Ivan Blogs"
        handleElimanrBlog={handleElimanrBlog}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.id === 2)}
        titulo="Id 2 Blogs"
        handleElimanrBlog={handleElimanrBlog}
      />
      <p>{nombre}</p>
      <button onClick={() => setNombre("Feijo")}>Cambio de nombre</button> */}
      {/* <h2>Pagina de inicio</h2>
      <p>
        {nombre} tiene {numero} años
      </p>

      <button onClick={(e) => handelClick()}>Pulsame esta</button>
      <button onClick={(e) => handelClickEdad()}>Pulsame esta otra</button> */}

      {/* <button
        onClick={(e) => {
          handelClickOtro(e.target);
        }}
      >
        Pulsame esta again😘
      </button> */}
    </div>
  );
};

export default Inicio;

//useEffect
