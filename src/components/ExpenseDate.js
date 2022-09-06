import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";


const ExpenseDate = (props) => {
  const aboutDate = new Date(props.finalDate);
  const year = aboutDate.getFullYear();
  const month = aboutDate.toLocaleString("en-IN", { month: "short" });
  const day = aboutDate.toLocaleString("en-IN", { day: "2-digit" });

  //  console.log(props.finalDate)

  // var day = ;
  return (
    <div>
      <Col className="expense_main__date">
        <div className="expense_date__month">{year}</div>
        <div className="expense_date__date">{day}</div>
        <div className="expense_date__year">{month}</div>
      </Col>
    </div>
  );
};

export default ExpenseDate;
