import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  // console.log({ data });

  useEffect(() => {
    // Checks if the dataType is not empty
    if (dataType) {
      console.log("About to fetch...");
      fetch(`https://swapi.dev/api/${dataType}/`)
        .then((res) => res.json())
        .then((responseData) => {
          console.log(responseData);
          setData(responseData);
        });
    }
  }, [dataType]); // If the dataType changes, then this fetch runs again

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
