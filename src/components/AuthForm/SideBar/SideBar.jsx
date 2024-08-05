import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../../assetss/constants"

import {AiFillHome} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"


const SideBar = () => {
    const sidebarItems =[
        {
            icons: <AiFillHome size={25} />,
            text: "Home",
            Link: "/",
        },
        {
            icons: <SearchLogo />,
            text: "Search",

            
        },
        {
            icons: <NotificationsLogo />,
            text:"Notifications",
            
        },
        {
            icons: <CreatePostLogo />,
            text: "Create",
            

        },
        
        {
            icons: <Avatar size={"sm"} name="Taha El Qassid" src="/profilepic.png" />,
            text: "Profile",
            Link: "/tahaelqassid",
        },



    ];





    return <Box 
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={0}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2,md:4}}
    >

        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
            <Link to ={'/'} as ={RouterLink} p={2} display={{base:"none",md:"block"}} cursor={"pointer"}>
                <InstagramLogo />
            </Link>
            <Link to ={'/'} as ={RouterLink} p={2} display={{base:"block",md:"none"}}
            borderRadius={6}
            _hover={{
                bg:"whiteAlpha.200"
            }}
            w={10}
            
            cursor={"pointer"}>

                <InstagramMobileLogo />
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
                {sidebarItems.map((item, index) => (

                    <Tooltip
                    key={index}
                    hasArrow
                    label={item.text}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base:"block",md:"none"}}
                    >
                        <Link
                        display={"flex"}
                        to={item.Link || null}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"WhiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base:10,md:"full"}}
                        justifyContent={{base:"center",md:"flex-start"}}

                        
                        >
                            {item.icons}
                            <Box display={{base:"none",md:"block"}}>
                                {item.text}
                                
                            </Box>
                        </Link>



                    </Tooltip>
                ))}


            </Flex>

            <Tooltip
                    
                    hasArrow
                    label={"Logout"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base:"block",md:"none"}}
                    >
                        <Link
                        display={"flex"}
                        to={"/auth"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"WhiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base:10,md:"full"}}
                        mt="auto"
                        justifyContent={{base:"center",md:"flex-start"}}
                        

                        
                        >
                            <BiLogOut size={25} /> 

                            
                            <Box display={{base:"none",md:"block"}}>
                                Logout
                            </Box>
                        </Link>



                    </Tooltip>
        </Flex>

    

        


    </Box>


  


  
  
 
    
  
}

export default SideBar