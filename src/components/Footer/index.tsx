import { Box, Flex, Text, Stack, Link } from "@chakra-ui/layout"
import { Link as LinkScroll} from "react-scroll"


export default function Footer() {
    return(
        <Box w="100%" position="relative" left="0" bottom="0" pb="25px"
        bgGradient={["linear(gray.800 0%, gray.800 50%, gray.700 100%)"]}>
            <Flex w="90%" m="auto" mt="50px" flexWrap="wrap">
                <Box w={{xl: "33%", md: "45%", sm: "90%"}} mb="20px" align="center">
                    <Stack spacing={5}>
                        <Text fontWeight="bold" color="yellow.500" fontSize="24px">Perfil</Text>
                        <LinkScroll to="about" spy={true} smooth={true} style={{cursor:"pointer"}} >Sobre mim</LinkScroll>
                        <LinkScroll to="ferramentas" spy={true} smooth={true} style={{cursor:"pointer"}} >Ferramentas</LinkScroll>

                    </Stack>
                </Box>
                <Box w={{xl: "33%", md: "40%", sm: "90%"}} mb="20px" align="center">
                    <Stack spacing={5}>
                        <Text fontWeight="bold" color="yellow.500" fontSize="24px">Contato</Text>
                        <Link href="https://www.linkedin.com/in/raphaelnds/" isExternal>Linkedin</Link>
                        <Link href="https://github.com/raphael-nds" isExternal>Github</Link>
                    </Stack>
                </Box>
                <Box w={{xl: "33%", md: "45%", sm: "90%"}} mb="20px" align="center" p="8px">
                    <Stack spacing={5}>
                        <Text fontWeight="bold" color="yellow.500" fontSize="24px">Projetos</Text>
                        <LinkScroll to="projectEcommerce" spy={true} smooth={true} style={{cursor:"pointer"}} >E-commerce</LinkScroll>
                        <LinkScroll to="projectDesafio" spy={true} smooth={true} style={{cursor:"pointer"}} >Desafio endereços com autocomplete viacep</LinkScroll>
                        <LinkScroll to="projectLanding" spy={true} smooth={true} style={{cursor:"pointer"}} >Landing Page responsiva</LinkScroll>
                    </Stack>
                </Box>
            </Flex>
            <Text mt="50px" align="center" justify="center">
                Design feito por <span>
                    <Link href="https://github.com/raphael-nds" isExternal color="yellow.500" style={{fontWeight:"bold"}}>
                        raphael-nds
                    </Link>  
                </span>
                
            </Text>
        </Box>
    )
}