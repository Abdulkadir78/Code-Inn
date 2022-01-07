import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

function HomeBtn() {
  return (
    <Link href="/" passHref>
      <button className="flex">
        <IoIosArrowRoundBack className="text-primary" size={25} />
        <span className="text-primary">Home</span>
      </button>
    </Link>
  );
}

export default HomeBtn;
