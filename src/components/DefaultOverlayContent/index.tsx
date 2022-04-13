import {Container , Heading , Buttons} from './styles';

interface Props{
    label:string
    description:string
};

const DeafultOverlayContent: React.FC<Props> = ({
    label,
    description
}) => {
    const moreLabel  = (label:string) => {
        if(label == 'More'){
            return <button>Shop Now</button>
        }
        else{
           return( <><button>Custom Order</button>
            <button className='white'>Existing Inventory</button>
            </>)
        }
    }

    return(
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>
            <Buttons>
                {moreLabel(label)}
            </Buttons>
        </Container>
    )
}

export default DeafultOverlayContent;