import React, { FunctionComponent, useState } from 'react';
import Questionnaire from './Questionnaire';

type CardProps = {
    title: string,
    content?: AcoordionContent[]  // the paragraph is optional
}

export const Accordion: FunctionComponent<CardProps> = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);


    return (

        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && content && content.length > 0 && content.map((data, index) => {
                return (
                    <div key={index}>
                        <Questionnaire question={data.question} controllerTypes={data.controllerTypes} index={index} />
                    </div>
                )
            })
            }
        </div>
    );
};

interface AcoordionContent {
    question: string,
    controllerTypes: ControllerData[]

}

interface ControllerData {
    type: string,
    data?: string[]
}

export default Accordion;