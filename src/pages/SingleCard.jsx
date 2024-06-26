import React from "react";
import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <Link to={props.to}>
      <Card
        shadow="sm"
        padding="xl"
        component="a"
        className="md:w-80"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <Card.Section>
          <Image src={props.src} h={160} alt="No way!" />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          {props.text}
        </Text>

        <Text mt="xs" c="dimmed" size="sm" className="text-wrap ">
          {props.desc}
        </Text>
      </Card>
    </Link>
  );
};

export default SingleCard;
