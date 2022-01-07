import Lottie from "react-lottie";

interface LottieProps {
  path: string;
}

const DisplayLottie: React.FunctionComponent<LottieProps> = ({ path }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: "",
    path,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={options} />;
};

export default DisplayLottie;
