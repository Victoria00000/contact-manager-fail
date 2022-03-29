
export const ContactCard = ({contact}) => {
  return (
    <div>
        <div className="item">
            <img className="ui avatar image" alt={contact.name} src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png" />
        <div className="content">
          <div className="header"> {contact.name} </div>
          <div className=""> {contact.email} </div>
        </div>
        <i className="trash alternate outline icon" style={{color:'red', marginTop:'7px'}} />
      </div>
    </div>
  );
};
