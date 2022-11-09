export const ProjectItem = ({ name, about, link, image }) => {
  return (
    <div>
      {name} {about} {link} <img src={image} alt={`project ${name}`} />
    </div>
  );
};
