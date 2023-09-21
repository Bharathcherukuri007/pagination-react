import { SERVER_URL, TOTAL_RECORDS } from "./constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "./Table";
import { Context } from "./context";
import { Rows } from "./models/rows";
import "./App.css";
import Pagination from "./Pagination";
import PageButton from "./components/PageButton";
function App() {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [button, selectedButton] = useState(0);
  const [overFlow, setOverFlow] = useState(-1);
  useEffect(() => {
    setTimeout(async () => {
      try{
        let res = overFlow == -1 ? await axios.get(`${SERVER_URL}?offset=${offset}&limit=${limit}`) : await axios.get(`${SERVER_URL}?offset=${offset}&limit=${overFlow}`);
        if(overFlow != -1){
          setOverFlow(-1);
        }
        setUsers(res.data.users);
        console.log(users);
      }
      catch(e){
        
      }
     
    }, 100);
  }, [limit, offset]);

  function onSelectedButton(id){
    console.log(id);
    selectedButton(id);
    if((id + 1) * limit > TOTAL_RECORDS){

      setOverFlow(TOTAL_RECORDS - id * limit);
      setOffset(parseInt((id * limit)));
    }
    else{

      setOffset(id == 0 ? 0: (id ) * limit);
    }

  }
  function onRowsChanged(rows){
    setLimit(rows);

  }

  return (
    <div className="table-container">
      <Table onRowsChanged = {onRowsChanged}/>
      <div style={{ height: "auto", overflow: "auto" }}>
        <table>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastname</th>
          </tr>
          {users.length == 0 ? (
            <h1>no users</h1>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            ))
          )}
        </table>
      </div>
      <Pagination limit={limit} offset={offset} selectedButton = {onSelectedButton} id = {button} />
    </div>
  );
}

export default App;
