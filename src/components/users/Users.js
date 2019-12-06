import React, { useEffect, Fragment, Component } from "react";
import Useritem from "./useritem";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import Spinner from "../layout/spinner";
const Users = ({ github: users, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <SearchForm />
        </div>
      )}
    </Fragment>
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

export default connect(mapStateToProps)(Users);
