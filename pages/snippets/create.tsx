import Brand from "../../components/Brand";
import Meta from "../../components/UI/Meta";
import AddSnippet from "../../components/AddSnippet";

function Create() {
  return (
    <>
      <Meta title="Create" />
      <div className="container">
        <Brand />
        <AddSnippet />
      </div>
    </>
  );
}

export default Create;
