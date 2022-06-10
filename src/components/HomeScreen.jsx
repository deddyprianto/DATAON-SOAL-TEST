import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadingData } from "../fnPromise/loadingAsyncData";
const HomeScreen = () => {
  const [data, setData] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const getData = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=a56dde77bde9b312c5cba15745ba8a0e"
        );
        const dataFinal = await getData.json();
        loadingData(dataFinal).then((res) => setData(res));
        console.log(dataFinal);
      } catch (error) {
        alert(error);
      }
    };
    dataFetch();
  }, []);
  console.log(data);
  return (
    <div className="contaninerApp">
      <div style={{ width: "100%", position: "absolute", top: "40%", left: 0 }}>
        <button style={{ backgroundColor: "skyblue" }}>POST news</button>
      </div>
      <div className="textContainer">
        <button onClick={() => navigate("/", { replace: true })}>Logout</button>
        <h1>City News</h1>
      </div>
      <div className="card">
        {!data ? (
          <h1 style={{ textAlign: "center", fontSize: "13px", color: "white" }}>
            Loading...
          </h1>
        ) : (
          <div className="card_main">
            {data.results.map((item, i) => (
              <>
                <img
                  style={{ width: "100%" }}
                  alt="img"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                />
                <div className="cardInfo">
                  <p>{item.original_title}</p>
                  <p>{item.overview}</p>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
