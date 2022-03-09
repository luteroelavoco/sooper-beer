import React from 'react'
import "./styles.less"
import { Typography} from 'antd';
const { Paragraph, Text } = Typography;


export const Footer: React.FC = () => {
  return (
    <div className="container-footer">
      <Paragraph>
        A simple anime catolog to show my skills in React Js and Next Js.
      </Paragraph>
      <Text>
        Copyright (c) HeroAnime 2022 by
        <a href="https://www.linkedin.com/in/cientista1/" target="_blank">
          Lutero Elavoco
        </a>
        . All rights reserved.
      </Text>
    </div>
  )
}


