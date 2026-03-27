import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import "./App.css";

function App() {
  const [userdata, setuserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`,
      );
      setuserData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="container">
      <div className="top-bar">
        <button onClick={() => index > 1 && setIndex(index - 1)}>Prev</button>

        <button onClick={() => setIndex(index + 1)}>Next</button>
      </div>

      <div className="grid">
        {loading ? (
          <h3>Loading...</h3> // ✅ better loading control
        ) : (
          userdata.map((elem) => (
            <Card key={elem.id} elem={elem} /> // ✅ fixed key
          ))
        )}
      </div>
    </div>
  );
}

export default App;
