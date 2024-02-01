
"use client"
import {HoverCard,Group,  UnstyledButton,  Text,  SimpleGrid,  ThemeIcon,  Anchor,  Divider,  Center,  Box,  Burger,  Drawer,  Collapse,  ScrollArea,  rem,  useMantineTheme,  useMantineColorScheme, Flex, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CiUnlock } from "react-icons/ci";
import { Button } from '@mantine/core';
import { FaCircle } from "react-icons/fa6";
import classes from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Theme } from '../Theme/Theme';

const data = [{
  menu:"Home",
},
{
  menu:"About",
},
{
  menu:"Testmonial",
},
{
  menu:"Pricing",
},
{
  menu:"Contact us",
},]
export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [active, setActive] = useState(true)
    const [list, setList] = useState(true)
    const theme = useMantineTheme();
  
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentMenuItem, setCurrentMenuItem] = useState<String>('');
    const templink=true

     const handleScroll = () => {
  let current = "";
      setIsScrolled(!isScrolled)
  data.forEach((item) => {
    const sectionId = `#${item.menu}`;
    const section = document.querySelector(sectionId) as HTMLElement; // Type assertion

    if (section) {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop) {
        current = item.menu;
      }
    }
  });

  data.forEach((item) => {
    const link = document.querySelector(`#${item.menu}-links`);
    if (link) {
      // link.classList.remove("active");

      if (item.menu === current) {
        link.classList.add("active");
      }
    }
  });
};

// useEffect(() => {
//   if(window.scrollY>40){
//     setIsScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', handleScroll);
//   }
//   else{
//     document.querySelector(`#$`)classList.remove()
//   }
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

useEffect(() => {
  setIsScrolled(window.scrollY > 40);
  window.addEventListener('scroll', handleScroll);
  // if(window.scrollY<40){
  //   // document.querySelector(".myshadow")?.classList.remove("shadow-md")
  //   setIsScrolled(!isScrolled)
  // }

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animate");

    function checkScroll() {
      sections.forEach(section => {
        const distance = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (distance < windowHeight * 0.75) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Call initially to check if elements are in view on page load
  });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


    
    return (
      <div className="">

      <div className={`myshadow  md:px-0 fixed w-full top-0 bg-white z-[998] font-medium ${isScrolled ? 'customeShadow py-[15px]' : 'pb-[30px] pt-[15px] '}`}>
      <Box className='container mx-auto max-w-[1340px] text-base border-none' h="100%">
        <header className={`${classes.header} lg:max-w-full max-w-[970px] m-auto`}>
          <Group h="100%" className='lg:justify-center' gap={0}>
            <Link href="https://superprops-next.vercel.app/appcreative2">
              <img src='/Image/header/logo.png' alt='Logo' className=' max-w-[148px]' />
            </Link>

            <Group h="100%" gap={0} visibleFrom="md" className={`ml-[75px] ` } >
              {data.map((item, index) => (
                <Link href={`#${item.menu}`} key={index} id={`#${item.menu}-links`} className={classNames(classes.link, `px-[13px] navLinks hover:text-[#3c74ff] md:text-[13px] tracking-[0.3px] lg:text-[16px] first:text-[#3c74ff]  ${active && templink?'text-black':'first:text-black'} `)} onClick={() => {setActive(!templink)}}>
                  {item.menu}
                </Link>
              ))}
            </Group>

            <Group visibleFrom="md" className='xl:ml-auto'>
              <Link href="" className={`flex justify-center items-center md:text-[13px] lg:text-base hover:text-[#6b9eff]`} >
                <img src='Image/header/lock.png' className='mr-[9px]' />
                Login Now
              </Link>

              <Button  size='md' radius="xl" className='font-bold bg-[#6b9eff] hover:bg-[#3c74ff] text-white px-[15px] py-[3px] ml-1' style={{background:Theme?.colors?.primary?.[0]}}>Join Free</Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" className='ml-auto' />
          </Group>
        </header>

      </Box>
    </div>
      </div>
  );
}

export default Header;

function setCurrentMenuItem(current: string) {
  throw new Error('Function not implemented.');
}
