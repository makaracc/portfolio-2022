import * as data from "../data/data.json";
export const About = () => {
  return (
    <div className="flex flex-row flex-grow">
      <div className="flex flex-col w-[40%] place-items-center">
        <img
          src={data.my_image}
          alt="my_img"
          className="rounded-[50%] object-cover h-32 w-32"
        />
        <div>
          {data.name} {data.last_name}
        </div>
      </div>

      <div className="p-5">
        <p>I am a graduate Software Engineer. </p>
        <p>
          I have graduated Bachelor of Information Technology with distinction
          from Deakin University.
        </p>
      </div>
    </div>
  );
};
