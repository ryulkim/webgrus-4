import { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import axios from "axios";

const Contents = () => {
  const [confirmedData, setConfirmedData] = useState({
    labels: ["1월", "2월", "3월"],
    datasets: [
      {
        label: "국내 누적 확진자",
        backgroundColor: "salmon",
        fill: true,
        data: [10, 5, 3],
      },
    ],
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "https://api.covid19api.com/dayone/country/kr"
      ); //async, await를 통해 모든 데이터가 불러와질때까지 기다린다.
      console.log(res);
    };
    fetchEvents();
  });
  return (
    <section>
      <h2>국내 코로나 현황</h2>
      <div className="contents">
        <div>
          <Bar
            data={confirmedData}
            options={
              ({
                title: {
                  display: true,
                  text: "누적 확진자 추이",
                  fontSize: 16,
                },
              },
              { legend: { display: true, position: "bootom" } })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Contents;
