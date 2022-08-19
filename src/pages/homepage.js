import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";
import bank from "../badbank.PNG";
import landing1 from "../landing1.png";
import landing2 from "../landing2.png";
import landing3 from "../landing3.png";
import signup from "../signup.jpeg";

function Homepage() {
  return (
    <div className="homeContainer">
      <div className="homepage">
        <Card className="landingCard">
          <img alt="BadBank Logo" src={bank} />
          <CardBody>
            <CardTitle tag="h5">BadBank</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Welcome
            </CardSubtitle>
            <CardText className="bankDescription">
              BadBank is the future of banking. We use cutting-edge technology
              to make your banking experience smooth and secure
            </CardText>
          </CardBody>
        </Card>
        <div>
          <img
            className="landingPicture"
            alt="Photo of a bank skyscraper in a financial district"
            src={landing3}
          />
        </div>
        <div className="promotion">
          <div className="promotion-text">
            Sign up for a checking account today and get $100 instantly
            deposited to your account! <br />
            It's the first of many perks of banking with BadBank!
          </div>
          <img
            alt="person using a computer"
            src={signup}
            className="signupPic"
          />
        </div>
        <div className="footer">
          Location | Contact Us | Careers | Privacy | Terms of Use <br />
          &#169; BadBank Corporation All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Homepage;
