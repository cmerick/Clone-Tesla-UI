import { Container } from './styles';

import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay'

import DefaultOverlayContent from '../DefaultOverlayContent';

const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Model One',
                        'Model Two',
                        'Model Three',
                        'Model Four',
                        'Model Five',
                        'Model Six',
                        'Model Seven'
                    ].map(modelname => (
                        <ModelSection
                        key={modelname}
                            className="colored"
                            modelName={modelname}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelname}
                                    description='Order Online for Delivery' />
                            }
                        />

                    ))}

                </div>

                <UniqueOverlay/>
            </ModelsWrapper>
        </Container>
    )
}

export default Page;