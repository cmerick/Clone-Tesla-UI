
import { useRef, useState } from 'react';
import {CarModel} from '../ModelsContext'
import {Container} from './styles';


const ModelsWrapper: React.FC = ({children}) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

    return(
        <Container ref={wrapperRef}>
            {children}
        </Container>
    )
}

export default ModelsWrapper;