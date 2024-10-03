import { useSelector } from "react-redux";

const Loader = () => {
    const {loader} = useSelector((state) => state.user);
    
  return (
    <>
    {loader && 
        <div className="loading">
          <div className="uil-ring-css" style={{ transform: "scale(0.79)" }}>
            <div></div>
          </div>
        </div>
    }
    </>
  )
}

export default Loader