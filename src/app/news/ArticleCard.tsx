/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Icon } from "zebpay-ui"; // Ensure you have the correct icon imports

interface ArticleCardProps {
  title: string | JSX.Element;
  link: string | JSX.Element;
  imageUrl: string | JSX.Element;
  date: string | JSX.Element;
  readingTime: string | JSX.Element;
  domain: string | JSX.Element;
}

const cardContainerStyle = css`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 0.5rem;
  background: var(--Zeb_Solid-BG_Blue, #222245);
  border: 1px solid var(--Zeb_Solid-BG_Blue, #222245);
  &:hover {
    border: 1px solid var(--Zeb_Solid-Bright_Blue, #338fff);
    box-shadow: 0px 8px 8px -4px #0c0c1d;
  }
`;

const insideFrameStyle = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`;

const cardImageStyle = css`
  display: flex;
  width: 6.25rem;
  height: 6.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 1px solid var(--grey-02-dark, #34345a);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

const cardInfoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1 0 0;
  align-self: stretch;
`;

const cardInfoHeaderStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const domainNameStyle = (isZebpay: boolean) => css`
  display: flex;
  padding: 0.125rem 0.25rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: ${
    isZebpay
      ? "rgba(51, 143, 255, 0.20)"
      : "var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.20))"
  };
  color: ${
    isZebpay
      ? "var(--Shimmer-Zeb_Solid-Bright_Blue, #338FFF)"
      : "var(--Shimmer-Zeb_Solid-Grey, #C2C2DD)"
  };
    ...typography.b5/12_semibold;
 
`;

const titleStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  color: var(--Zeb_Solid-White, #fff);
  text-decoration: none;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-width: 20ch;
  line-height: 1.5;
`;

const cardInfoFooterStyle = css`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  align-self: stretch;
`;

const readingTimeStyle = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const readingTimeIconStyle = css`
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
  padding: 0.0375rem;
  justify-content: center;
  align-items: center;
`;

const readingTimeTextStyle = css`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
      ...typography.b5/12_regular;

`;

const iconSeparatorStyle = css`
  width: 1rem;
  height: 1rem;
`;

const dateStyle = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const dateIconStyle = css`
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
  padding: 0.0375rem;
  justify-content: center;
  align-items: center;
`;

const dateTextStyle = css`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
   ...typography.b5/12_regular;
`;

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  imageUrl,
  date,
  readingTime,
  domain,
}) => {
  // Check if domain is a string
  const isDomainString = typeof domain === "string";
  const shortDomain =
    isDomainString && domain.startsWith("www.") ? domain.slice(4) : domain;

  // Check if shortDomain is a string to avoid errors
  const isZebpay =
    isDomainString &&
    typeof shortDomain === "string" &&
    shortDomain.toLowerCase() === "zebpay";

  return (
    <div css={cardContainerStyle}>
      <div css={insideFrameStyle}>
        <div css={cardImageStyle}>
          {typeof imageUrl === "string" ? (
            <img
              src={imageUrl}
              alt={typeof title === "string" ? title : "Article Image"}
            />
          ) : (
            imageUrl
          )}
        </div>
        <div css={cardInfoStyle}>
          <div css={cardInfoHeaderStyle}>
            {typeof shortDomain === "string" ? (
              <div css={domainNameStyle(isZebpay)}>{shortDomain}</div>
            ) : (
              domain
            )}

            {typeof shortDomain === "string" ? (
              <a
                href={typeof link === "string" ? link : "#"}
                target="_blank"
                rel="noopener noreferrer"
                css={titleStyle}
              >
                {title}
              </a>
            ) : (
              title
            )}
          </div>

          <div css={cardInfoFooterStyle}>
            {typeof shortDomain === "string" ? (
              <div css={readingTimeStyle}>
                <div css={readingTimeIconStyle}>
                  <Icon name="term" />
                </div>
                <div css={readingTimeTextStyle}>{readingTime}</div>
              </div>
            ) : (
              readingTime
            )}
            <div css={iconSeparatorStyle}></div>

            {typeof shortDomain === "string" ? (
              <div css={dateStyle}>
                <div css={dateIconStyle}>
                  <Icon name="calendar" />
                </div>
                <div css={dateTextStyle}>{date}</div>
              </div>
            ) : (
              date
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
