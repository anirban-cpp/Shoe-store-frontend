import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import userImg from "../../assets/user-img.png";
import Spinner from "../../components/Spinner/Spinner";
import {
  getUserRequest,
  updateUserRequest,
} from "../../Redux/Actions/UserActions";
import getDate from "../../utils/getDate";
import Validate from "../../utils/Validate";

import "./Profile.css";

const InputRow = (props) => {
  const { inputValue, onnameChange, onemailChange } = props;

  return (
    <div className="input-row">
      <div className="input-row-1">
        <label>Username</label>
        <input value={inputValue.name} type="text" onChange={onnameChange} />
      </div>
      <div className="input-row-1">
        <label>Email address</label>
        <input value={inputValue.email} type="email" onChange={onemailChange} />
      </div>
    </div>
  );
};

const Profile = () => {
  window.scroll(0, 0);
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const date = getDate(user.createdAt);

  useEffect(() => {
    dispatch(getUserRequest(user._id));
  }, []);

  const [inputValue, setInputValue] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = () => {
    if (
      inputValue.name.trim() !== user.name ||
      inputValue.email.trim() !== user.email ||
      inputValue.password.trim().length > 0
    ) {
      const isValid = Validate({ ...inputValue });
      if (isValid.valid) {
        if (inputValue.password.trim() !== "") {
          dispatch(
            updateUserRequest({
              id: user._id,
              name: inputValue.name,
              email: inputValue.email,
              password: inputValue.password,
            })
          );
        } else {
          dispatch(
            updateUserRequest({
              id: user._id,
              name: inputValue.name,
              email: inputValue.email,
            })
          );
        }
        dispatch(getUserRequest(user._id));
      } else {
        toast.error(isValid.message);
      }
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }
  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <>
      <div className="profile">
        <div className="profile-left">
          <div className="left-banner" />
          <div className="left-content">
            <div className="image-container">
              <img src={userImg} alt="banner" />
            </div>
            <div className="text-container">
              <div>
                <p>
                  <strong>{user?.name}</strong>
                </p>
                <p>Joined {date}</p>
              </div>
            </div>
          </div>
          <div className="profile-options">
            <span
              className={active ? "active" : ""}
              onClick={() => setActive(true)}
            >
              Profile Settings
            </span>
            <span
              className={!active ? "active" : ""}
              onClick={() => setActive(false)}
            >
              Orders
            </span>
          </div>
        </div>
        <div className="profile-right">
          <InputRow
            inputValue={inputValue}
            onnameChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
            onemailChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
          />
          <div className="input-row">
            <div className="input-row-1">
              <label>New Password</label>
              <input
                type="password"
                value={inputValue.password}
                onChange={(e) =>
                  setInputValue({ ...inputValue, password: e.target.value })
                }
              />
            </div>
            <div className="input-row-1">
              <label>Confirm Password</label>
              <input
                type="password"
                value={inputValue.confirmpassword}
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    confirmpassword: e.target.value,
                  })
                }
                pattern={inputValue.password}
              />
            </div>
          </div>
          <button className="update-profile-btn" onClick={handleSubmit}>
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
