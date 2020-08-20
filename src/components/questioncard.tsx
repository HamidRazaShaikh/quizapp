import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { QuestionFetch, QuestionStates } from "./../services/api";
import { Card, CardTitle, CardText, Label, Input } from "reactstrap";
import NotFound from "./notfound";

type Props = {
  userData: any;
  setRegistered: Function;
};

const number = 10;

const QuestionCard: React.FC<Props> = ({ setRegistered, userData }) => {
  const [question, setQuestion] = useState<QuestionStates[]>([]);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  let [qnumber, setQnumber] = useState<number>(0);
  const [selection, setSelection] = useState<string>("");
  const [scroe, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const startQuiz = async () => {
    const newQuestion = await QuestionFetch(
      number,
      userData.level,
      userData.category
    );
    setQuestion(newQuestion);
    setShowQuestion(true);
  };

  const handleChange = (e: any) => {
    setSelection(e.target.value);
  };

  const handleRestart = () => {
    setRegistered(false);
  };

  const handleNextQuestion = () => {
    const correct = question[qnumber].correct_answer === selection;
    if (correct) setScore((prev) => prev + 1);

    if (qnumber === 9) {
      setGameOver(true);
    } else if (qnumber < 10) {
      setQnumber(++qnumber);
    }
  };

  if (!question) {
    return <NotFound />;
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
      <Row>
        <Col>
          <Button
            type="submit"
            className="d-flex align-items-center"
            onClick={startQuiz}
            style={{ marginTop: 10 }}
          >
            start quiz
          </Button>
        </Col>
      </Row>
      {showQuestion ? (
        <Row style={{ marginTop: 20 }}>
          <Col sm="12">
            <Card body>
              <h5>Question # {qnumber + 1}</h5>
              <h6>{question[qnumber].question}</h6>
              {console.log(question[qnumber].options)}
              {question[qnumber].options.map((opt: string, index: number) => (
                <Label style={{ marginLeft: 20 }} key={index}>
                  <Input
                    value={opt}
                    required
                    onChange={handleChange}
                    checked={selection === opt}
                    type="radio"
                    name="radio1"
                  />{" "}
                  {opt}
                </Label>
              ))}

              <Button onClick={handleNextQuestion}>Next Question</Button>
            </Card>
          </Col>
        </Row>
      ) : null}

      {gameOver ? (
        <Row style={{ marginTop: 20 }}>
          <Col sm="12">
            <Card body>
              <h5>Result</h5>
              <h6>your score is {scroe} out of 10.</h6>
              <Button onClick={handleRestart}>Restart</Button>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default QuestionCard;
