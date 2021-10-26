import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Ferramentas from "../components/Ferramentas"
import Projetos from "../components/Projetos"

export default function Home() {
  return (
    <Box>
      <Header />
          
      <Section />
      
      <Ferramentas />

      <Projetos />
      
      <Footer />
    </Box>
  )
}
