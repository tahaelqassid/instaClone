import { Container, Flex,Box} from "@chakra-ui/react"
import FeedPosts from "../../components/AuthForm/FeedPosts/FeedPosts"
import { SuggestedUsers } from "../../components/AuthForm/SuggestedUsers/SuggestedUsers"



const HomePage = () => {
  return (


    <Container maxW={"container.lg"}>

      <Flex gap={20}>
      <Box flex={2} py={10}>
      <FeedPosts />   
      </Box>

      <Box flex={3} py={30}
      display={{base:"none",lg:"block"}}
      maxW={"300px"}

      
      >
        <SuggestedUsers />
        </Box>
        </Flex>
        </Container>

  )
}











  

export default HomePage