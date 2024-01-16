import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [sotad, setSotad] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, serError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("No se ha podido recurerar la informacion");
          } else {
            return res.json();
          }
        })
        .then((datos) => {
          // console.log(datos);
          setSotad(datos);
          setCargando(false);
        })
        .catch((err) => {
          console.log(err.message);
          setCargando(false);

          serError(err.message);
        });
    }, 300);
  }, [url]);
  return { sotad, cargando, error };
};

export default useFetch;
