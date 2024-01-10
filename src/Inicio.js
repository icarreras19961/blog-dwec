import { useState, useEffect } from "react";
import BlogList from "./blogList";

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

  const [blogs, setBlogs] = useState([
    { titulo: "Mi nueva web", body: "texo_original.txt", autor: "Ivan", id: 1 },
    {
      titulo: "Tortilla de patata",
      body: "Parabailarlabamba",
      autor: "Pepe",
      id: 2,
    },
    {
      titulo: "Me comeria un caballo",
      body: "AwanaBumBembemWochuBario",
      autor: "Ajo",
      id: 3,
    },
  ]);

  const [nombre, setNombre] = useState("Pedro Sanchez");
  const handleElimanrBlog = (id) => {
    let seHaBorrado = false;
    const nuevoBlog = blogs.filter((blog) => blog.id !== id);
    // setBlogs(nuevoBlog);
    if (nuevoBlog === blogs) {
      seHaBorrado = true;
      console.log(seHaBorrado);
    } else {
      seHaBorrado = false;
      console.log(seHaBorrado);
    }
  };

  useEffect(() => {
    console.log("useEffect es machista");
    console.log(blogs);
  }, [nombre]);
  //Props
  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        titulo="Listado de Blogs"
        handleElimanrBlog={handleElimanrBlog}
      />
      <BlogList
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
      <button onClick={() => setNombre("Feijo")}>Cambio de nombre</button>
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
