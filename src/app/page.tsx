"use client";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

const Main = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
  width: auto;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--Zeb_Solid-BG_Blue, #222245);
  box-shadow: 0px 7px 7px -2px rgba(97, 79, 79, 0.14);
`;

const Container = styled.div`
  display: flex;
  width: 760px;
  height: 636px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: var(--Zeb_Solid-Dark_Blue, #181837);
  
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 730px;
  height: auto;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  overflow:hidden;
`;

const InnerDiv = styled.div`
  display: flex;
  width: 312px;
  height: auto;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--blue-02-dark-blue, #181837);
`;

const HeaderFrame = styled.div`
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  background: var(--blue-02-dark-blue, #181837);
`;

const Header = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const News = styled.div`
  display: flex;
  width: 543px;
  align-items: center;
  gap: 8px;
  color: var(--Zeb_Solid-White, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
  letter-spacing: 0.05rem;
`;

const Filter = styled.div`
  color: white;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

const Updown = styled.div`
  color: white;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

const Cards = styled.div`
  display: flex;

  flex-direction: row;
  padding: 1rem;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  border-radius: 0.5rem;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

const CardImage = styled.div`
  display: flex;
  width: 6.25rem;
  height: 6.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const DomainName = styled.div`
  display: flex;
  width: 7.5rem;
  height: 1.375rem;
  padding: 0.125rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;

const Title = styled.div`
  display: flex;
  height: 3rem;
  padding: 0.125rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

const ReadingTime = styled.div`
  display: flex;
  width: 5rem;
  height: 1.125rem;
  padding: 0.125rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;

const Date = styled.div`
  display: flex;
  width: 5rem;
  height: 1.125rem;
  padding: 0.125rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;

const Newsletter = styled.div`
  border-radius: 8px;
  background: var(--Zeb_Solid-BG_Blue, #222245);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;
const NewsletterImage = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const HeaderContent = styled.div`
  width: 80px;
  height: 80px;
  fill: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const Heading1 = styled.div`
  width: 220px;
  height: 28px;
  fill: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const Heading2 = styled.div`
  height: 48px;
  align-self: stretch;
  fill: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const Email = styled.div`
  display: flex;
  width: 220px;
  height: 20px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const Input = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 12px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const Subscribe = styled.div`
  display: flex;
  width: 255px;
  height: 34px;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
`;
const TradingBanner = styled.div`
  display: flex;
  width: 279px;
  height: 232px;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(
    --Zeb_Gradient-Dark_Blue,
    linear-gradient(254deg, #4a62ca -43.42%, #1b264b 148.58%)
  );
`;
const Innercard = styled.div`
  display: flex;
  width: 280px;
  height: 604px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
`;

const LoadingState = () => {
  return (
    <Main>
      <Container>
        <HeaderFrame>
          <Header>
            <News>Crypto News</News>
            <Filter>F</Filter>
            <Updown>UP</Updown>
          </Header>
        </HeaderFrame>
        <Section>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
          <Cards>
            <CardImage></CardImage>
            <CardInfo>
              <CardContent>
                <DomainName></DomainName>
                <Title></Title>
              </CardContent>
              <CardFooter>
                <ReadingTime></ReadingTime>
                <Date></Date>
              </CardFooter>
            </CardInfo>
          </Cards>
        </Section>
      </Container>
      <InnerDiv>
        <Innercard>
          <Newsletter>
            
            <HeaderContent></HeaderContent>
            <Heading1></Heading1>
            <Heading2></Heading2>
            <Email></Email>
            <Input></Input>
            <Subscribe></Subscribe>
          </Newsletter>
          <TradingBanner></TradingBanner>
        </Innercard>
      </InnerDiv>
    </Main>
  );
};

export default LoadingState;
