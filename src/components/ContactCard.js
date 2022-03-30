import { Link } from "react-router-dom";

export const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image"
        src='https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_960_720.png'
        alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};
