import { Flex, Text, Icon } from "@chakra-ui/react";
import { VscCode } from 'react-icons/vsc';




export default function Header() {
    return(
        <Flex boxShadow="dark-lg" >
            <Flex w="90%" maxW="1200px" h="80px" m="auto" align="center" justify="space-between">
                <Text fontFamily="monospace" fontSize="24px" color="yellow.500">
                    Meu Portfólio <span/>
                    <Icon as={VscCode} fontSize="32px"/>  
                </Text>
            </Flex>
        </Flex>
    )
}