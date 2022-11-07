import * as data from "../data/data.json";
export const About = () => {
  return (
    <div>
      <div>
        {data.name} {data.last_name}
      </div>
      {"\n"}I am a graduate Software Engineer. I have graduated Bachelor of
      Information Technology with distinction from Deakin University.
    </div>
  );
};
