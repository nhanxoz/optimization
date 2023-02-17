import logo from "./logo.svg";
import "./App.css";
import MatrixForm from "./MatrixForm";
import TargetFunction from "./TargetFunction";
import { Button, Grid } from "@material-ui/core";
import ModalExample from "./ModalExample";
import { useState } from "react";
import SelectThreeButtons from "./Select3Button";
function App() {
  const [b, setB] = useState([])
  const [H, setH] = useState([])
  const [d, setD] = useState([])
  const [res, setRes] = useState([])
  const [matrix, setMatrix] = useState([])
  const [matrix1, setMatrix1] = useState([])
  const [matrix2, setMatrix2] = useState([])
  const [selectedButtons, setSelectedButtons] = useState([]);
  const math = require('mathjs');
  const handleSolve = ()=>{
    
    const colIndices = math.subtract(selectedButtons, Array(selectedButtons.length).fill(1));
    console.log("selected buttons", colIndices)

    // Extract the submatrix of size n x n
    const n = colIndices.length;
    const submatrix = math.subset(matrix1, math.index(math.range(0,n), colIndices));
    console.log(matrix)
    console.log(matrix)
    const submatrix1 = math.subset(matrix, math.index(0,colIndices));
    console.log(submatrix1)
    
    const matrix3 = math.inv(submatrix)
    const b = math.transpose(math.matrix(matrix2));
    const C = math.multiply(matrix3, b)
    const x = C._data
    setB(x)
    const H = math.multiply(matrix3, matrix1)
    
    const CH = math.multiply(submatrix1, H)
    const delta = math.subtract(CH, matrix)
    console.log("delta:",delta)
    console.log(math.max(...delta))
    const maxIndex = delta[0].indexOf(math.max(...delta));
    setD(delta[0])
    console.log(H)
    const submatrix2 = math.subset(H, math.index( math.range(0,n),maxIndex)).flat()
    console.log(submatrix1)
    console.log(submatrix2)
    console.log(x)
    let result=[]
    for (let i = 0; i < x.length; i++){
      if (submatrix2[i] <= 0) {
        result.push(0);
        console.log(result)
      } else {

        result.push(x[i]/submatrix2[i]);
        console.log(result)
      }
    }
    let min = 10000
    for (let i = 0; i < result.length; i++){
      if ((result[i]>0) && (result[i] < min)) min = result[i]
    }
    console.log(result, min)
    setRes(result)
    const minhij = result.indexOf(min)
    console.log(minhij)
    colIndices[minhij] = maxIndex
    console.log(colIndices)
    setH(H)
    console.log(H)
  }
  return (
    <div className="App">
      <TargetFunction matrix={matrix} setMatrix={setMatrix} />
      
      <MatrixForm matrix1={matrix1} matrix2={matrix2} setMatrix1={setMatrix1} setMatrix2={setMatrix2}/>
      <Grid spacing={2} container xs={12}>
        <Grid item xs={12} sm={6}>
        <SelectThreeButtons matrix={matrix} matrix1={matrix1} selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ModalExample res={res} d={d} H={H} b={b} c={matrix} onSolve={handleSolve} selectedButtons={selectedButtons}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
