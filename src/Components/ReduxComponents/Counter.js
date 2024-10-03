import React from "react";
import { increment, decrement, incrementByAmount, clear } from "../../redux/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
  return (
    <section className="howitworks section-padding">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card bx-shadow">
              <div className="card-header">
                <h2 className="card-title text-center">Counter</h2>
              </div>
              <div className="card-body py-4">
                <div className="text-center d-flex justify-content-between">
                  <button className="btn btn-dark" aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                  >
                    Decrement
                  </button>
                  <span>{count}</span>
                  <button className="btn btn-dark" aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                  >
                    Increment
                  </button>
                </div>
                <div className="text-center d-flex  justify-content-center mt-4">
                  <button className="btn btn-dark" aria-label="Increment value"
                  onClick={() => dispatch(incrementByAmount(10))}
                  >
                    Increment by Amount
                  </button>
                  <button className="btn btn-dark mx-2" aria-label="Increment value"
                  onClick={() => dispatch(clear())}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
