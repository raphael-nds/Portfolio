import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { data1, data2, data3 } from "./arrayProjeto"
import Zoom from 'react-reveal/Zoom';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


SwiperCore.use([ Autoplay, Pagination, Navigation ]);


export default function Projetos() {
    return(
        <Flex w="100%" h="auto" m="auto" flexWrap="wrap">
                <Box w={{xl: "40%", md: "70%", sm: "90%"}} h="auto" m="auto" mb="30px" >
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={25}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay:5000}}
                        navigation
                        pagination={{ clickable: true }} >
                            {
                                data1.map( index => (
                                    <SwiperSlide key={index.id}>
                                        <Zoom left>
                                            <Box w="auto" h="300px" m="auto" id="projectEcommerce">
                                                <Text fontSize="24px" opacity="0.3" align="center" justify="center">
                                                    E-commerce
                                                </Text>
                                                <Image src={index.img} w="auto" h="300px" m="auto" />
                                            </Box>
                                        </Zoom>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </Box>
                <Box w={{xl: "40%", md: "70%", sm: "90%"}} h="auto" m="auto" mb="30px" >
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={25}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay:5000}}
                        navigation
                        pagination={{ clickable: true }} >
                            {
                                data2.map( index => (
                                    <SwiperSlide key={index.id}>
                                        <Zoom right>
                                            <Box w="auto" h="300px" m="auto" id="projectDesafio">
                                                <Text fontSize="24px" opacity="0.5" align="center" justify="center">
                                                Desafio endereços com autocomplete viacep
                                                </Text>
                                                <Image src={index.img} w="auto" h="300px" m="auto" />
                                            </Box>
                                        </Zoom>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </Box>
                <Box w={{xl: "40%", md: "70%", sm: "90%"}} h="auto" m="auto" mb="30px" >
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={25}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay:5000}}
                        navigation
                        pagination={{ clickable: true }} >
                            {
                                data3.map( index => (
                                    <SwiperSlide key={index.id}>
                                        <Zoom left>
                                            <Box w="auto" h="300px" m="auto" id="projectLanding">
                                                <Text fontSize="24px" opacity="0.5" align="center" justify="center">
                                                    Landing page responsiva
                                                </Text>
                                                <Image src={index.img} w="auto" h="300px" m="auto" />
                                            </Box>
                                        </Zoom>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </Box>
        </Flex>
    )
}