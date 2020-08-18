import React, { useState }from "react";
import { Container, Row, Col } from "reactstrap";
import  {QuestionFetch} from './../services/api';


type Props = {
  userData: any;
};

const number = 10






const QuestionCard: React.FC<Props> = ({ userData }) => {

  const questionData = async()=>{
    await QuestionFetch(number,userData.level, userData.category);


  }

  console.log(questionData())


  


  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h3 className="mt-5"> Welcome to quiz dear {userData.name}!</h3>
          <h6 style={{ textAlign: "left" }}>category : {userData.category}</h6>
          <h6 style={{ textAlign: "right", marginTop: -20 }}>
            {" "}
            level : {userData.level}
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionCard;
