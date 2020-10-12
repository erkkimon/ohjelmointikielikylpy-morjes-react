import React, { useEffect, useState } from "react";

function App() {

  const [taskList, setTaskList] = useState(["asdf", "qwer", "zxcv", "hjkl"])
  const [newTaskItem, updateNewTaskItem] = useState("")

  // function addNewTaskToList () {
  //   alert("heippa vanha tapa")
  // }

  let addNewTaskToList = function(taskItem) {
    let taskListCopy = [...taskList]
    taskListCopy.push(taskItem)
    setTaskList(taskListCopy)
  }

  // useState() ---------->>>>>>>> [counter = 0, increaseCounter = useState()]

    //super(props)
    // this.state = {
      // taskList: [
      //   "Tehtävä 1",
      //   "Tehtävä 2",
      //   "Tehtävä 3"
      // ]
    // }

  return (

    <div className="App">

      <input type="text" value={newTaskItem} onChange={ (e) => updateNewTaskItem(e.target.value) } />
      <input type="button" value="Lisää taski" onClick={() => addNewTaskToList(newTaskItem) } />

      { taskList.map( (singleTask) => <p>Tehtävän sisältö: {singleTask}</p>) }

      {/* <button type="button" onClick={() => increaseCounter(counter + 1)}>Laskurin arvo {counter}</button> */}
    </div>
  );

}

export default App;
