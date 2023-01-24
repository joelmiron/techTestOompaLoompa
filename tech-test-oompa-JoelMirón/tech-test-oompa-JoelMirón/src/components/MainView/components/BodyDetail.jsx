


const BodyDetail = ({image, name,lastName, gender,profession, description}) =>{

    return (
    <div className="detail">
      <div className="detailContainer">
        <div className="oompaImage">
          <img src={image} alt="OompaImage" />
        </div>
        <div className="oompaDetail">
          <div className="infoSpace">
            <div className="name">
              {name} {lastName}
            </div>
            <div className="gender">
              {gender === "F" ? "Female" : "Man"}
            </div>
            <div className="profession">{profession}</div>
          </div>

    {description && description.replace(/(<([^>]+)>)/gi, "")}
          <br />
        </div>
      </div>
    </div>
    )
}

export default BodyDetail