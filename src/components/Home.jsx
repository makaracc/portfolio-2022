import * as data from "../data/data.json";

export const Home = () => {
  return (
    <div className="m-0 z-10">
      <div>
        {data.name} {data.last_name}
      </div>
      {"\n"}I am a graduate Software Engineer.fdsf
    </div>
  );
};
