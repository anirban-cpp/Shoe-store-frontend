import React from "react";

const ImageSlider = ({ props }) => {
//   const [idx, setIdx] = useState(0);
//   const intervalRef = useRef();

//   const getWidth = () => window.innerWidth;

//   const changeImage = () => {
//     intervalRef.current = setInterval(() => {
//       setIdx((previdx) => (previdx + 1) % 3);
//     }, 1000);
//   };

  return (
    <img
      src={props[0]}
      alt=""
    //   onMouseOver={changeImage}
    //   onMouseOut={() => {
    //     setIdx(0);
    //     clearInterval(intervalRef.current);
    //   }}
    />
  );
};

export default ImageSlider;
