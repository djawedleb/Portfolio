
  import 'tailwindcss/tailwind.css';
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
  import { FaEye, FaCode } from 'react-icons/fa';
  
  export default function Example() {
    return (
      <div id='project' className="bg-[#E0F7FA] py-24"> {/* Light blue background */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div  className="py-12 border-t border-gray-300">
            <h2 className="text-3xl font-bold text-center">My Projects</h2>
            <p className="mt-2 text-lg text-center text-gray-600">
              Here are some of my projects that showcase my skills and creativity.
            </p>
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-8"> {/* Change grid to flex */}
            <Card maxW='sm' className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <Image src={pr1} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Job Finder</Heading>
                  <Text color='gray.600'>
                    A platform that connects job seekers with potential employers. Users can create profiles, upload resumes, and search for job opportunities.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <Image src={pr2} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Portfolio</Heading>
                  <Text color='gray.600'>
                    A personal portfolio to showcase my projects and skills. Built with React and Tailwind CSS for a responsive design.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <Image src={commerce} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>E-commerce Store</Heading>
                  <Text color='gray.600'>
                    A full-stack e-commerce application that allows users to browse products, add items to their cart, and securely checkout.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    <a href="https://your-live-project-url.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  