import { Container, Header, Logo, Burguer, Footer } from './styles';




import DefaultOverlayContent from '../DefaultOverlayContent';
import useWrapperScroll from '../Model/useWrapperScroll';
import { useTransform } from 'framer-motion';

const UniqueOverlay: React.FC = () => {
    const {scrollYProgress} = useWrapperScroll()

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])
    return (
        <Container>
            <Header><Logo/><Burguer/></Header>
            <Footer style={{opacity}}>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/erickcastilhomestre/">UI-Clone</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/erickcastilhomestre/">Made with love</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/erickcastilhomestre/">By Erick Castilho Mestre</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay;