import React, { useState } from "react";
import { connect } from "react-redux";
import { searchUsers } from "../../actions/githubAction";
import Useritem from "./useritem";
import Spinner from "../layout/spinner";

const SearchForm = ({ github: { users, loading }, searchUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      window.alert("please enter some text");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="search users in bangalore..."
          name="text"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      <div style={userstyle}>
        {!loading &&
          users.length > 0 &&
          users.map(user => <Useritem key={user.id} user={user} />)}
      </div>
    </div>
  );
};
const userstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
const mapStateToProps = state => ({
  github: state.github
});
export default connect(mapStateToProps, { searchUsers })(SearchForm);
