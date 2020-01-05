import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import server_error from "../../icons/working.svg";

const Error = () => {
  return (
    <Center>
      <h3>
        {" "}
        <a> Page under construction </a> <Link to="/login">Go to Login</Link>
      </h3>
      <ErorrPage src={server_error} alt="" />
    </Center>
  );
};

const ErorrPage = styled.img``;

const Center = styled.div`
  display: grid;
  place-items: center;
`;

export default Error;
