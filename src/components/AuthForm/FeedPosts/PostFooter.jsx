import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../../assetss/constants"
import { useState } from "react"

const PostFooter = ({username}) => {
    const [liked, setLiked] =useState(false)
    const[likes,setLikes] =useState(609)
    const handlelike = () => {
        if(liked){
            setLiked(false)
            setLikes(likes -1)
        } else {
            setLiked(true)
            setLikes(likes +1)
        }
    }
  return <>
  <Box mb={10}>

  <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
    <Box onClick={handlelike}
    cursor={"pointer"}
    fontSize={18}
    
    >
        {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}

    </Box>

    <Box cursor={"pointer"} fontSize={18}>
        <CommentLogo />
    </Box>

  </Flex>
  <Text fontWeight={500} fontSize={"sm"}>
    {likes} likes
  </Text>
  <Text fontSize={"sm"} fontWeight={700}>
    {username}   {""}

  <Text as="span" fontWeight={400}>

       Feeling Good

    </Text>
    </Text>
    <Text fontSize={"sm"} color={"gray"}>
        View All 1.789 Comments
        </Text>

        <Flex alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
        >
            <InputGroup>
            <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
            <InputRightElement>
            <Button
            fontSize={14}
            color={"blue.500"}
            fontWeight={600}
            cursor={"pointer"}
            _hover={{color:"white"}}
            bg={"transparent"}>

                Post
            </Button>
            </InputRightElement>
            </InputGroup>

            
            


        </Flex>
        </Box>
  
  
  </>
}

export default PostFooter