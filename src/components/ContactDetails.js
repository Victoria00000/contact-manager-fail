import { Link } from "react-router-dom";

export const ContactDetails = (props) => {

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2022/02/26/05/48/beauty-7035241_960_720.png" alt="user face"/>
                </div>
                <div className="content">
                    <div className="header"> Name </div>
                    <div className="description"> Description </div>
                </div>
            </div>
        </div>
    );
};
