import { useState } from "react";

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
    { titulo: "Tortilla de patata", body: "Parabailarlabamba", autor: "Pepe", id: 2 },
    { titulo: "Me comeria un caballo", body: "AwanaBumBembemWochuBario", autor: "Ajo", id: 3 },
  ]);
  return (
    <div className="home">
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
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.titulo}</h2>
            <p>Escrito por {blog.autor}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Inicio;
