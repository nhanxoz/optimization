import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function MatrixForm({matrix1, matrix2, setMatrix1, setMatrix2}) {
  const classes = useStyles();
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  

  const handleRowChange = (event) => {
    setRows(event.target.value);
  };

  const handleColChange = (event) => {
    setCols(event.target.value);
  };

  const handleGenerateMatrix = () => {
    const newMatrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(0);
      }
      newMatrix.push(row);
    }
    setMatrix1(newMatrix);
  };

  return (

    

    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-number"
            label="Number of Rows"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleRowChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-number"
            label="Number of Columns"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleColChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateMatrix}
          >
            Generate Matrix
          </Button>
        </Grid>
        <Grid container xs={10}>
          {matrix1.map((row, rowIndex) => (
            <Grid item xs={12} key={`row-${rowIndex}`}>
              {row.map((col, colIndex) => (
                <TextField
                  key={`col-${colIndex}`}
                  label={`Row ${rowIndex + 1}, Col ${colIndex + 1}`}
                  defaultValue={0}
                  onChange={(e)=>{
                    var matrixClone = [...matrix1]
                    matrixClone[rowIndex][colIndex] = parseInt(e.target.value)
                    setMatrix1(matrixClone)
                    console.log(matrixClone)
                    console.log(matrix1)
                  }
                  }
                />
              ))}
            </Grid>
          ))}
        </Grid>
        <Grid container xs={2}>
          {matrix1.map((row, rowIndex) => (
            <Grid item xs={12} key={`row-${rowIndex}`}>
              <TextField
                key={`col`}
                label={`Row ${rowIndex + 1}, b`}
                defaultValue={0}
                onChange={(e)=>{
                  var matrixClone = [...matrix2]
                  matrixClone[rowIndex] = parseInt(e.target.value)
                  setMatrix2(matrixClone)
                  console.log(matrixClone)
                  console.log(matrix2)
                }
                }
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default MatrixForm;
