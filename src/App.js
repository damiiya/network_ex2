import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const callSomething = async () => {
    let data = {
      day: "일",
      sleep_time: "10:00",
    };
    const response = await fetch("http://localhost:5001/sleep_times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    console.log(response);
  };

  // const callSomethingAxios = () => {
  //   // json 타입으로 바꿔주지 않아도 axios가 알아서 바꿔줌
  //   // [config 설정으로 사용하기]
  //   axios({
  //     method: "get",
  //     url: "http://localhost:5001/sleep_times",
  //   }).then((response) => {
  //     console.log(response);
  //   });

  //   // [요청 메쏘드 사용하기]
  //   axios.get("http://localhost:5001/sleep_times").then((response) => {
  //     console.log(response);
  //   });

  //   // [작성 메쏘드 사용하기]
  //   let data = {
  //     day: "일",
  //     sleep_time: "10:00",
  //   };

  //   axios.post("http://localhost:5001/sleep_times", data).then((response) => {
  //     console.log(response);
  //   });
  // };

  React.useEffect(() => {
    // fetch 할 때 네이밍
    // callSomething();
    // axios 할 때 네이밍
    // callSomethingAxios();
  }, []);

  return <div className="App"></div>;
}

export default App;
