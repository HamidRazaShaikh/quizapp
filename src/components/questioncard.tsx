import React, { useState } from "react";
import {Button,Container, Row, Col } from "reactstrap";
import { QuestionFetch, QuestionStates } from "./../services/api";
import { Card,CardTitle, CardText} from 'reactstrap';



type Props = {
  userData: any;
};

const number = 10;

const QuestionCard: React.FC<Props> = ({ userData }) => {
  const [question, setQuestion] = useState<QuestionStates[]>([]);
  const [showQuestion , setShowQuestion] = useState<boolean>(false);
  const [ qnumber , setQnumber] = useState<number>(0);
  // const [options , setOptions] = useState <any[]>([])

  const startQuiz =async () =>{

    const newQuestion = await QuestionFetch(
      number,
      userData.level,
      userData.category
    );
    setQuestion(newQuestion);
    setShowQuestion(true);
    

  }

  

  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h3 className="mt-5"> Welcome to quiz dear {userData.name}!</h3>
          <h6 style={{ textAlign: "left" }}>category : {userData.sub}</h6>
          <h6 style={{ textAlign: "right", marginTop: -20 }}>
            {" "}
            level : {userData.level}
          </h6>
        </Col>
      </Row>
      <Row >
        <Col>
          <Button type="submit" className="d-flex align-items-center" onClick = {startQuiz}>
            start quiz
          </Button>
        </Col>
      </Row>
      { showQuestion? <Row>
      <Col sm="12">
        <Card body>
      <CardTitle>Question#{qnumber+1}</CardTitle>
      <CardText>{question[qnumber].question}</CardText>
      {  console.log(question[qnumber].options)}

          <Button>Go somewhere</Button>
        </Card>
      </Col>
      
    </Row> : null }
      

    </Container>
  );
};

export default QuestionCard;
