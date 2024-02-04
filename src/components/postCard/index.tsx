import { Card, CardBody, CardText, CardTitle } from "reactstrap";

interface CardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  handleCardClick: (id: string) => void;
}

export function CardComponent({
  id,
  title,
  description,
  imgUrl,
  handleCardClick,
}: CardProps) {
  return (
    <Card
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        width: "18rem",
        padding: "15px",
        cursor: "pointer",
        marginBottom: "10px",
      }}
      onClick={() => handleCardClick(id)}
    >
      <img
        alt="Sample"
        src={imgUrl}
        style={{ borderRadius: "10px", height: "rem" }}
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardBody>
      <CardText>{description}</CardText>
    </Card>
  );
}
