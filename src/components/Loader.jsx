import { Bars } from 'react-loader-spinner'

export const Loader = () => {
    return <Bars
  height="80"
  width="80"
  color="rgb(114, 208, 252)"
  ariaLabel="bars-loading"
      wrapperStyle={{
        position: "absolute",
    top: "50%",
    left: "50%",
      }}
  wrapperClass=""
  visible={true}
  textAlign= "center"
/>;
};