import Link from "next/link";

function Brand() {
  return (
    <div className="font-brand text-3xl lg:text-4xl mt-8">
      <Link href="/">{`<Code Inn/>`}</Link>
    </div>
  );
}

export default Brand;
