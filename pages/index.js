import styled from 'styled-components'
import db from '../db.json'

import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: 2% 10% auto 3%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Ramones</h1>
          </Widget.Header>
        <Widget.Content>
          <p>The legend of Ramones</p>
        </Widget.Content>
        </Widget>
        <Widget>
         <Widget.Header>
            <h1>The Ramones</h1>
          </Widget.Header>
        <Widget.Content>
          <p>The legend of Ramones</p>
        </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/RenatoCostaDev" />
    </QuizBackground>
  )
}



// function Title(props) {
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }