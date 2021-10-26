import { Box, Flex } from '@chakra-ui/react'
import { data } from "./dataFerramentas"
import Zoom from 'react-reveal/Zoom';

export default function Ferramentas() {
    return(
        <Box w="100%" id="ferramentas" bgGradient={[
            "linear(gray.800 0%, yellow.500 50%, gray.800 100%)"
          ]}>
            <Flex w="90%" m="auto" flexWrap="wrap">
                {
                    data.map(index => (
                        <Zoom top>
                            <Box key={index.id} w="200px" h="200px" m="auto" mt="25px" 
                            borderRadius="100%" bgImage={index.img} bgRepeat="no-repeat" bgPosition="center" />
                        </Zoom>
                    ))
                }
            </Flex>
        </Box>
    )
}