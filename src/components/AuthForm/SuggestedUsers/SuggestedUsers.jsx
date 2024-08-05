import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { Link } from "react-router-dom"



export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"} >
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you

            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All

            </Text>

        </Flex>

        <SuggestedUser name="Ahmed Qassid" followers={1342} avatar="/img2.png" />
        <SuggestedUser name="Assmaa Kheider" followers={10076} avatar="/img4.png" />
        <SuggestedUser name="SalMaissae Qassid" followers={83} avatar="/img3.png" />

        <Box fontSize={12}
        color={"gray.500"}
        mt={5}
        alignSelf={"start"}
        
        >
            ©© 2024 by {""}
            <Link href="https://github.com/tahaelqassid" target="_blank" color="blue.500" fontSize={14}>
                TahaElQassid
                
            </Link>

        </Box>


    </VStack>
  )
}
