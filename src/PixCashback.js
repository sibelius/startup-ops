import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const Img = styled.img`
  width: 400px;
  border: 6px solid #fff;
  border-radius: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const PixCashback = () => {
  return (
    <Flex>
      <Flex flexDirection='column' alignItems='center'>
        <h1>Demo</h1>
        <h2>Pix + Cashback</h2>
        <Img src="./img/qr-cashback.png" />
        <Link href="https://woovi.com/demo/cashback" target="_blank">
          <h2>woovi.com/demo/cashback</h2>
        </Link>
      </Flex>
    </Flex>
  );
};

export default PixCashback;
