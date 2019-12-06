import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/spinner";
import Repos from "../repos/repos";
import { Link } from "react-router-dom";
import { getUser, getUserRepos } from "../../actions/githubAction";
import { connect } from "react-redux";

const User = ({
  github: {
    repos,
    user: {
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followeers,
      following,
      hireable
    },
    loading
  },
  getUser,
  getUserRepos,
  match
}) => {
  useEffect(
    () => {
      getUser(match.params.login);
      getUserRepos(match.params.login);
      //eslint-disable-next-line
    },
    [getUser, getUserRepos]
  );

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back{" "}
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1> {name}</h1>
          <p>Location: {location} </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} target="_blank" className="btn btn-dark my-1">
            Visit Github profile
          </a>
          {name && (
            <ul>
              <li>
                <strong>Username : </strong>
                {name}
              </li>
            </ul>
          )}
          {company && (
            <ul>
              <li>
                <strong>Company : </strong>
                {company}
              </li>
            </ul>
          )}
          {blog && (
            <ul>
              <li>
                <strong>website : </strong>
                {blog}
              </li>
            </ul>
          )}
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};
const mapStateToProps = state => ({
  github: state.github
});
export default connect(mapStateToProps, { getUser, getUserRepos })(User);
