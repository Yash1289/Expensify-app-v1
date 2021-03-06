import React from "react";
import ReactDOM from "react-dom"


const Info = ( props ) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) =>(
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You need to login to see that</p>}
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => ( 
        <div>
            { props.isAdmin && <p>This is the admin message</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info = "There are the details" /> , document.getElementById("app"))
