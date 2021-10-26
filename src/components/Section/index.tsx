import { Box, Text } from "@chakra-ui/layout"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const data = [
  {
    id: 1,
	txt: "Olá, meu nome é Raphael Nunes !",
    msg: "Sou bacharel recém formado no curso de Ciência da Computação, pela faculdade Estácio/Ceut, localizada em Teresina-PI. Possuo também cursos de especialização na área de desenvolvimento web com frameworks.",
  },
  {
    id: 2,
	txt: "Habilidades profissionais ",
    msg: "Sou um desenvolvedor Front-End Júnior, atuo cerca de 1 ano com ferramentas como React JS, Next JS, Typescript, Chakra UI, firebase, dentre outras. Não possuo experiências profissionais na área. Nesse período, utilizei do tempo para aprender e desenvolver pequenas aplicações para testar minhas hablidades. Possuo mais facilidades em desenvolvedor seguindo um design prontamente realizado, mas perfeitamente disposto a seguir algo criado a partir do zero."
  },
  {
	  id: 3,
	  txt: "Um pouco sobre mim ",
	  msg: "Considero-me uma pessoa calma, tranquila, totalmente dedicado aquilo que presto a fazer. Novos desafios ganham minha atenção, o que é bastante comum na área do desenvolvimento. Tenho facilidade com trabalho em equipe, em seguir planejamentos e cronogramas. Consigo me adaptar bem as diferentes situações e, principalmente, extrair insight dos acontecimentos."
  }
]

SwiperCore.use([ Autoplay, Pagination, Navigation ]);



export default function Section() {
    return(
        <Box w={{xl: "90%", md: "90%", sm: "90%"}} m="auto" h={{xl: "500px", md: "550px", xd: "500px", sm: "825px"}}>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={25}
				slidesPerView={1}
				loop={true}
				autoplay={{delay:5000}}
				navigation
				pagination={{ clickable: true }} >
				{
					data.map( index => (
					<SwiperSlide key={index.id}>
						<Box boxShadow="dark-lg" m="50px" p="50px" h={{xl: "300px", md: "350px", xd: "500px", sm: "725px"}} align="center" justify="" 
						borderRadius="10px" id="about" >
							<Text textAlign="justify" fontFamily="cursive" >
								<Text fontSize="38px" fontWeight="bold" mb="15px" align="center">{index.txt}</Text>
								<Text p="15px" style={{textIndent:"50px"}}>{index.msg}</Text>
							</Text>

						</Box>
					</SwiperSlide>
					))
				}
			</Swiper>
        </Box>
    )
}