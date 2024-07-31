import { Flex,Box } from "@chakra-ui/react"
import SideBar from "../../components/AuthForm/SideBar/SideBar"
import { useLocation } from "react-router-dom"


const PageLayout = ({children}) => {
    const {pathname}= useLocation()
  return (
    <Flex>
        {/* siDE BAR on left   */}
        {pathname !== '/auth' ? (
            <Box w={{base:"70px",md:"240px"}}>
            <SideBar />
        </Box>

        ) : null }


        

        {/* the page conteent on right   */}


    <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>
        {children}

        </Box>

        </Flex>
  )
        }







   
    

export default PageLayout