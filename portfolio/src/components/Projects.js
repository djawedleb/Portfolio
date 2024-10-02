import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
  } from '@chakra-ui/react';
  import pr1 from "../assets/pr1.webp";
  import pr2 from "../assets/pr2.png";
  import commerce from "../assets/commerce.webp";

  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Recent Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here are a few projects I've worked on recently
            </p>
          </div>
          {/* Container to keep cards in the same row */}
          <div className="mx-auto mt-10 flex flex-wrap justify-between gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
              <Card  maxW="sm" className="flex-grow">
                <CardBody>
                  <Image
                    src={pr1}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Social Media Website Clone</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for people who love chic design with a sprinkle of vintage.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Preview
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Source code
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <Card  maxW="sm" className="flex-grow">
                <CardBody>
                  <Image
                    src={pr2}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Car Renting Website</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for people who love chic design with a sprinkle of vintage.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Preview
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Source code
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <Card  maxW="sm" className="flex-grow">
                <CardBody>
                  <Image
                    src={commerce}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">E-commerce Website</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for people who love chic design with a sprinkle of vintage.
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Preview
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Source Code
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
          </div>
        </div>
      </div>
    );
  }
  