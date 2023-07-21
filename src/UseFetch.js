import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  console.log(info);
  return { info };
};

export default UseFetch;
