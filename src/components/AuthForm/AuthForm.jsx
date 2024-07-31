import { Input, VStack,Image,Box,Button, Flex,Text } from "@chakra-ui/react"
import { useState} from "react"
import { useNavigate } from "react-router-dom"


const AuthForm = () => {
    const [isLogin,setIslogin] = useState(true)
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        confirmPassword:"",
    })
    const handleAuth = () => {
        if(!inputs.email || !inputs.password) {
            alert("Please fill All the Fields")
            return;

        }


        navigate('/');




    }
  return (
    <>
    <Box  border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"printer"} alt="Insta logo" />
        <Input
        placeholder="email"
        fontSize={14}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({...inputs,email:e.target.value
        })}

        
        />
        <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({...inputs,password:e.target.value})}

        
        
        />
        {!isLogin ? (

            <Input
            placeholder=" Confirm Password"
            fontSize={14}
            type="password"
            value={inputs.confirmPasswordpassword}
            onChange={(e) => setInputs({...inputs,confirmPasswordpassword:e.target.value})}

        
            />

        ): null}
        <Button w={"full"} colorScheme="blue" size="sm" fontSize={14} onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign up"}
        </Button>
        {/*  OR TEXXT */}

        <Flex alignItems={"Center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>
            <Text mx={1} color={"white"}>
                OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>

        </Flex>

        <Flex alignItems={"Center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src='/google.png' w={5} alt="google logo qsd" />
            <Text mx="2" color={"blue.500"}>
                Log in With Google
            </Text>
        </Flex>

        

    </VStack>

  </Box>

  <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <Flex alignItems={"Center"} justifyContent={"center"}>
        <Box>
            {isLogin ? "Dont Have any Account? " : " Already Have an Account"}

        </Box>
        <Box onClick={()=> setIslogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign Up" : "Log in"}
        </Box>

    </Flex>

  </Box>

    
  

  
  
  
  </>
  )
    
  
}

export default AuthForm