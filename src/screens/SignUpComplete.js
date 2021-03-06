import React from "react";
import { useHistory } from "react-router-dom";
import AuthBox from "../components/auth/AuthBox";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import Footer from "../components/feed/Footer";
import WhiteButton from "../components/auth/WhiteButton";
import PinkButton from "../components/auth/PinkButton";
import Logo from "../image/landing_logo.png";
import axios from "axios";

function SignUpComplete() {
  const history = useHistory();
  let name = sessionStorage.getItem("name");
  let email = sessionStorage.getItem("email");
  let password = sessionStorage.getItem("password");
  let health = Array(sessionStorage.getItem("health"));
  let petId = sessionStorage.getItem("pet_id");
  let cat_or_dog = sessionStorage.getItem("cat_or_dog");
  let pet_name = sessionStorage.getItem("pet_name");
  let pet_age = sessionStorage.getItem("pet_age");
  let pet_neuter = sessionStorage.getItem("pet_neuter");
  let pet_size = sessionStorage.getItem("pet_size");
  let pet_sex = sessionStorage.getItem("pet_sex");
  let pet_weight = sessionStorage.getItem("pet_weight");
  console.log(health);
  let pet_body = {
    cat_or_dog: cat_or_dog,
    pet_name: pet_name,
    pet_age: pet_age,
    pet_sex: pet_sex,
    pet_neuter: pet_neuter,
    pet_size: pet_size,
    pet_weight: pet_weight,
  };
  axios
    .post("https://mungnyangapp-server.herokuapp.com/pet", pet_body)
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });

  let user_body = {
    name: name,
    email: email,
    password: password,
    pet_id: petId,
  };
  let h_body = {
    pet_id: petId,
    health_id: health,
  };

  axios
    .post("https://mungnyangapp-server.herokuapp.com/user", user_body)
    .then((res) => {});

  axios
    .post("https://mungnyangapp-server.herokuapp.com/pet_health", h_body)
    .then((res) => {});

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ???</div>
          <div style={{ fontWeight: "bold" }}>???????????? ??????</div>
          <div> </div>
        </Header>
        <div
          className='WhiteSpace'
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <AuthBox>
          <div>
            <img src={Logo} />
          </div>
          <div
            className='text'
            style={{
              marginTop: "10px",
              color: "#888888",
              width: "360px",
              height: "94px",
              textAlign: "center",
            }}
          >
            <p>
              ???????????????.{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {name}
              </span>
              ???
              <br />
              ????????? ??????????????? ????????? ?????????
              <br />
              ?????????????????????!
            </p>
          </div>
        </AuthBox>
        <Footer>
          <PinkButton
            onClick={function () {
              history.push("/ocr");
            }}
          >
            ???????????? ????????? ????????????
          </PinkButton>
          <WhiteButton
            onClick={function () {
              history.push("./log-in");
            }}
          >
            ???????????? ????????????
          </WhiteButton>
        </Footer>
      </AuthLayout>
    </StartLayout>
  );
}

export default SignUpComplete;
