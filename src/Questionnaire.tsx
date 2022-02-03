import React, { FunctionComponent } from 'react';

type QProps = {
  question: string,
  controllerTypes?: ControllerData[],  // the paragraph is optional
  index: number
}

export const Questionnaire: FunctionComponent<QProps> = ({ question, controllerTypes, index }) => {

  return (
    <div>
      <div>
        {index + 1} {question}
      </div>
      {
        controllerTypes && controllerTypes?.length > 0 && <div>
          {controllerTypes.map((item, index) => {
            return (
              <div key={index}>
                {(() => {
                if (item.type === 'input') {
                  <input type="text" />

                }
                if (item.type === 'checkbox') {
                  <div>
                    {item.data && item.data.length > 0 && item.data.map((text, index) => {
                      return (
                        <div>
                          <input type="checkbox" /> {text}
                        </div>
                      )

                    })}
                  </div>

                }
                if (item.type === 'radio') {
                  <div>
                    {item.data && item.data.length > 0 && item.data.map((text, index) => {
                      return (
                        <div>
                          <input type="radio" /> {text}
                        </div>
                      )

                    })}
                  </div>
                }

                if (item.type === 'select') {
                  <div>
                    {item.data && item.data.length > 0 && <select>
                      {item.data.map((text, index) => {
                        return (
                          <option>
                            {text}
                          </option>
                        )

                      })}
                    </select>}
                  </div>

                }
              })}
              </div>

            )
          })}
        </div>
      }


    </div>
  );
};

interface ControllerData {
  type: string,
  data?: string[]
}

export default Questionnaire;