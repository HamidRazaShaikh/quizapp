import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

type Props = {

  userData : any
}

const QuestionCard : React.FC<Props> = ({userData})=> {

  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h3 className = 'mt-5'> Welcome to quiz dear {userData.name}!</h3>
          <h6  style = {{textAlign : 'left'}}>category : {userData.category}</h6>
          <h6  style = {{ textAlign : 'right', marginTop : -20}}> level : {userData.level}</h6>
        </Col>
      </Row>
    </Container>
  );
}


export default QuestionCard;
