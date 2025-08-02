
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
  import eventify from "../assets/eventify.png";
  import Resto from "../assets/Resto.png.png";
  import Cover from "../assets/Cover.jpg";
  import IntelliChat from "../assets/IntelliChat.png";
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
                <Image src={eventify} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Eventify</Heading>
                  <Text color='gray.600'>
                  A full-stack web application for managing event registrations, built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    <a href="https://event-registration-system-five.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/djawedleb/Event-Registration-System" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <Image src={Resto} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Resto</Heading>
                  <Text color='gray.600'>
                  A full-stack web application for managing restaurant operations, including orders, reservations, tables, and food inventory. Built with React (frontend) and Node.js/Express/MongoDB (backend).
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    <a href="https://restaurant-management-blue-chi.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/djawedleb/Restaurant-management" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <Image src={Cover} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>SmartAgri</Heading>
                  <Text color='gray.600'>
                  A comprehensive IoT-based smart agriculture system that enables real-time monitoring and control of agricultural parameters using modern technology.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    Live Demo
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/djawedleb/SmartAgri" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <Image src={IntelliChat} alt='Project Image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>IntelliChat</Heading>
                  <Text color='gray.600'>
                  A modern, responsive AI chat application built with React, Node.js, and Ai api. Features real-time chat, image analysis, user authentication, and a beautiful dark-themed interface.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaEye />}>
                    <a href="https://intellichat-ruddy.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant='ghost' colorScheme='blue' leftIcon={<FaCode />}>
                    <a href="https://github.com/djawedleb/IntelliChat" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  