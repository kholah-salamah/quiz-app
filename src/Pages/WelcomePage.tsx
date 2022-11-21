import { Card, CardBody } from "@chakra-ui/card";
import { Button, Center, Divider, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Image
        objectFit="contain"
        src="https://img.freepik.com/free-photo/young-woman-trendy-stylish-glasses-bright-orange-oversized-jacket-white-background-holds-phone-with-blank-white-screen_343596-8188.jpg?w=1480&t=st=1668861801~exp=1668862401~hmac=e24b6fb12c4cf618f7dd6a8a08a573236f60144a05a8811398f6b8aca2fd84f6"
        alt=""
        marginBottom={6}
      />
      <CardBody>
        <Center>
          <Text marginBottom={12} fontSize="lg" as="sub">
            Welcom to try this simple Quiz
          </Text>
        </Center>
        <Center>
          <Button
            colorScheme="blue"
            marginTop={2}
            onClick={() => navigate("/questions")}
          >
            Get started!
          </Button>
        </Center>
      </CardBody>
    </>
  );
};

export default WelcomePage;
