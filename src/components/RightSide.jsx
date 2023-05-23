import styled from "styled-components";
import { Link } from "react-router-dom";

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h1 style={{ backgroundColor: "lavender" }}>Scholarships</h1>
        </Title>

        <FeedList>
          <li>
            <Link to="/school_FILL0_wght400_GRAD0_opsz48 (1).svg">
              <Avatar />
            </Link>

            <div>
              {/* <span>#Scholarships</span> */}
              {/* <button>See Scholarships </button> */}
              <Link to="/Scholarships">
                <button type="button">See Scholarships</button>
              </Link>
            </div>
          </li>

          <li>
            <Link to="/">
              <Avata />
            </Link>

            <div>
              {/* <span>#Video</span> */}
              <button>See Internships</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          {/* View all recommendations
          <img src="/assets/right-icon.svg" alt="" /> */}
        </Recommendation>
      </FollowCard>

      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

const FollowCard = styled.div`
  background-color: rgb(230, 168, 247);
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  overflow: hidden;
  padding: 12px;
  position: relative;
  text-align: center;
`;

const Title = styled.div`
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  display: inline-flex;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
`;

const FeedList = styled.ul`
  margin-top: 16px;

  li {
    align-items: center;
    display: flex;
    font-size: 14px;
    margin: 12px 0;
    position: relative;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      align-items: center;
      background-color: transparent;
      border-radius: 15px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.6);
      display: inline-flex;
      font-weight: 600;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      outline: none;
      padding: 16px;
      text-align: center;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("/assets/school_FILL0_wght400_GRAD0_opsz48.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 48px;
  margin-right: 8px;
  width: 48px;
`;

const Avata = styled.div`
  background-image: url("/assets/corporate_fare_FILL0_wght400_GRAD0_opsz48.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 48px;
  margin-right: 8px;
  width: 48px;
`;

const Recommendation = styled.a`
  align-items: center;
  color: #0a66c2;
  display: flex;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    height: 100%;
    width: 100%;
  }
`;

export default Rightside;
