import React, { useReducer } from "react";

import reducer, { initialState } from "../reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  setMemory,
  applyMemoryToTotal,
  clearMemory,
} from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const operateNum = (num) => {
    dispatch(applyNumber(num));
  };

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  dispatch(setMemory());
                }}
                value={"M+"}
              />
              <CalcButton
                onClick={() => {
                  dispatch(applyMemoryToTotal());
                }}
                value={"MR"}
              />
              <CalcButton
                onClick={() => {
                  dispatch(clearMemory());
                }}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton
                // onClick={() => {
                //   dispatch(addOne());
                // }}
                onClick={() => {
                  operateNum(1);
                }}
                value={1}
              />
              <CalcButton
                onClick={() => {
                  operateNum(2);
                }}
                value={2}
              />
              <CalcButton
                onClick={() => {
                  operateNum(3);
                }}
                value={3}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  operateNum(4);
                }}
                value={4}
              />
              <CalcButton
                onClick={() => {
                  operateNum(5);
                }}
                value={5}
              />
              <CalcButton
                onClick={() => {
                  operateNum(6);
                }}
                value={6}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  operateNum(7);
                }}
                value={7}
              />
              <CalcButton
                onClick={() => {
                  operateNum(8);
                }}
                value={8}
              />
              <CalcButton
                onClick={() => {
                  operateNum(9);
                }}
                value={9}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  handleOperation("+");
                }}
                value={"+"}
              />
              <CalcButton
                onClick={() => {
                  handleOperation("*");
                }}
                value={"*"}
              />
              <CalcButton
                onClick={() => {
                  handleOperation("-");
                }}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={() => {
                  dispatch(clearDisplay());
                }}
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
