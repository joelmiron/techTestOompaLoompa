import { useHistory } from "react-router";

const OompaLoompaMain = ({
  id,
  image,
  firstName,
  lastName,
  gender,
  profession,
}) => {
  const history = useHistory();

  const loompaDetails = (oompaLoompa) => {
    history.push("/" + oompaLoompa);
  };

  return (
    <div className="oompaLoompaContent" onClick={() => loompaDetails(id)}>
      <img alt="OompaImage" className="imagesOompaLoompas" src={image} />
      <div>
        <div className="name">
          {firstName} {lastName}
        </div>
        <div className="gender">{gender === "F" ? "Female" : "Male"}</div>
        <div className="profession">{profession}</div>
      </div>
    </div>
  );
};

export default OompaLoompaMain;
