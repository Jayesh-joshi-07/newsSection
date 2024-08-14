// // /** @jsxImportSource @emotion/react */
// // import React from "react";
// // import styled from "@emotion/styled";

// // interface ArticleCardProps {
// //   title: string;
// //   link: string;
// //   imageUrl: string;
// //   date: string;
// //   readingTime: string;
// //   domain: string;
// // }

// // const CardContainer = styled.div`
// //   display: flex;
// //   padding: 0.75rem;
// //   flex-direction: column;
// //   align-items: center;
// //   gap: 0.25rem;
// //   flex: 1 0 0;
// //   border-radius: 8px;
// //   background: var(--Zeb_Solid-BG_Blue, #222245);
// // `;

// // const InsideFrame = styled.div`
// //   display: flex;
// //   width: 205px;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: flex-start;
// //   gap: 12px;
// // `;

// // const CardImage = styled.div`
// //   // display: flex;
// //   width: 12.813rem;
// //   height : 6.75rem;
// //   // flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   gap: 0.25rem;
// //   align-self: stretch;
// //   border-radius: 0.25rem;
// //   border: 1px solid var(--grey-02-dark, #34345a);
// //   img {
// //     width: 100%;
// //     height: 100%;
// //     object-fit: cover;
// //     border-radius: 0.25rem;
// //   }
// // `;

// // const CardInfo = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: flex-start;
// //   gap: 16px;
// //   align-self: stretch;
// // `;

// // const CardInfoHeader = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: flex-start;
// //   gap: 8px;
// //   align-self: stretch;
// // `;

// // const DomainName = styled.div<{ isZebpay: boolean }>`
// //   display: flex;
// //   padding: 2px 4px;
// //   justify-content: center;
// //   align-items: center;
// //   gap: 4px;
// //   color: #c0c0ee;
// //   border-radius: 4px;
// //   background: var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.2));
// // `;

// // const Title = styled.a`
// //   display: -webkit-box;
// //   -webkit-box-orient: vertical;
// //   -webkit-line-clamp: 1;
// //   align-self: stretch;
// //   overflow: hidden;
// //   color: var(--Zeb_Solid-White, #fff);
// //   font-feature-settings: "clig" off, "liga" off;
// //   text-overflow: ellipsis;

// //   /* b4/14_semibold */
// //   font-family: Lato;
// //   font-size: 14px;
// //   font-style: normal;
// //   font-weight: 600;
// //   line-height: 24px; /* 171.429% */
// //   letter-spacing: 0.4px;
// //   text-decoration: none;
// // `;
// // const Description = styled.div`
// //   display: -webkit-box;
// //   -webkit-box-orient: vertical;
// //   -webkit-line-clamp: 2;
// //   flex: 1 0 0;
// //   color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
// //   font-feature-settings: "clig" off, "liga" off;
// //   text-overflow: ellipsis;

// //   /* b5/12_regular */
// //   font-family: Lato;
// //   font-size: 12px;
// //   font-style: normal;
// //   font-weight: 400;
// //   line-height: 18px; /* 150% */
// //   letter-spacing: 0.4px;
// // `;

// // const CardInfoFooter = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 2px;
// //   align-self: stretch;
// // `;

// // const ReadingTime = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 4px;
// // `;

// // const ReadingTimeIcon = styled.div`
// //   width: 12px;
// //   height: 12px;
// // `;

// // const ReadingTimeText = styled.div`
// //   color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
// //   font-feature-settings: "clig" off, "liga" off;

// //   /* b5/12_regular */
// //   font-family: Lato;
// //   font-size: 12px;
// //   font-style: normal;
// //   font-weight: 400;
// //   line-height: 18px; /* 150% */
// //   letter-spacing: 0.4px;
// // `;

// // const Date = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 4px;
// // `;

// // const DateIcon = styled.div`
// //   width: 12px;
// //   height: 12px;

// // `;

// // const DateText = styled.div`
// //   color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
// //   font-feature-settings: "clig" off, "liga" off;

// //   /* b5/12_regular */
// //   font-family: Lato;
// //   font-size: 12px;
// //   font-style: normal;
// //   font-weight: 400;
// //   line-height: 18px; /* 150% */
// //   letter-spacing: 0.4px;
// // `;

// // const ArticleCard: React.FC<ArticleCardProps> = ({
// //   title,
// //   link,
// //   imageUrl,
// //   date,
// //   readingTime,
// //   domain,
// // }) => {
// //   const shortDomain = domain.startsWith("www.") ? domain.slice(4, -4) : domain;
// //   // const cleanedDomain = shortDomain.endsWith(".com") ? shortDomain.slice(0, -4) : shortDomain;

// //   const isZebpay = shortDomain.toLowerCase() === "zebpay";

// //   return (
// //     <CardContainer>
// //       <InsideFrame>
// //         <CardImage>
// //           <img src={imageUrl} alt={title} />
// //         </CardImage>
// //         <CardInfo>
// //           <CardInfoHeader>
// //               <DomainName isZebpay={isZebpay}>{shortDomain}</DomainName>

// //             <Title href={link} target="_blank" rel="noopener noreferrer">
// //               {title}
// //             </Title>
// //             <Description>Lorem ipgdfhdh sgsgf ghfgjfj adipisicing elit.</Description>
// //           </CardInfoHeader>
// //           <CardInfoFooter>
// //             <ReadingTime>
// //               <ReadingTimeIcon>
// //                 {/* Insert your SVG icon here */}
// //               </ReadingTimeIcon>
// //               <ReadingTimeText>{readingTime}</ReadingTimeText>
// //             </ReadingTime>
// //             <Date>
// //               <DateIcon>{/* Insert your SVG icon here */}</DateIcon>
// //               <DateText>{date}</DateText>
// //             </Date>
// //           </CardInfoFooter>
// //         </CardInfo>
// //       </InsideFrame>
// //     </CardContainer>
// //   );
// // };

// // export default ArticleCard;

// /** @jsxImportSource @emotion/react */
// import React from "react";
// import styled from "@emotion/styled";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// interface ArticleCardProps {
//   title?: string | React.ReactElement | JSX.Element;
//   link?: string;
//   imageUrl?: string | React.ReactElement | JSX.Element;
//   date?: string | React.ReactElement | JSX.Element;
//   readingTime?: string | React.ReactElement | JSX.Element;
//   domain?: string | React.ReactElement | JSX.Element;
//   loading: boolean | React.ReactElement | JSX.Element;
// }

// const CardContainer = styled.div`
//   display: flex;
//   padding: 0.75rem;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.25rem;
//   flex: 1 0 0;
//   border-radius: 8px;
//   background: var(--Zeb_Solid-BG_Blue, #222245);
// `;

// const InsideFrame = styled.div`
//   display: flex;
//   width: 205px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 12px;
// `;

// const CardImage = styled.div`
//   width: 12.813rem;
//   height: 6.75rem;
//   justify-content: center;
//   align-items: center;
//   gap: 0.25rem;
//   align-self: stretch;
//   border-radius: 0.25rem;
//   border: 1px solid var(--grey-02-dark, #34345a);
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 0.25rem;
//   }
// `;

// const CardInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 16px;
//   align-self: stretch;
// `;

// const CardInfoHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
//   align-self: stretch;
// `;

// const DomainName = styled.div<{ isZebpay: boolean }>`
//   display: flex;
//   padding: 2px 4px;
//   justify-content: center;
//   align-items: center;
//   gap: 4px;
//   color: #c0c0ee;
//   border-radius: 4px;
//   background: var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.2));
// `;

// const Title = styled.a`
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 1;
//   align-self: stretch;
//   overflow: hidden;
//   color: var(--Zeb_Solid-White, #fff);
//   font-feature-settings: "clig" off, "liga" off;
//   text-overflow: ellipsis;

//   /* b4/14_semibold */
//   font-family: Lato;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 24px; /* 171.429% */
//   letter-spacing: 0.4px;
//   text-decoration: none;
// `;
// const Description = styled.div`
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 2;
//   flex: 1 0 0;
//   color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
//   font-feature-settings: "clig" off, "liga" off;
//   text-overflow: ellipsis;

//   /* b5/12_regular */
//   font-family: Lato;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 18px; /* 150% */
//   letter-spacing: 0.4px;
// `;

// const CardInfoFooter = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2px;
//   align-self: stretch;
// `;

// const ReadingTime = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;

// const ReadingTimeIcon = styled.div`
//   width: 12px;
//   height: 12px;
// `;

// const ReadingTimeText = styled.div`
//   color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
//   font-feature-settings: "clig" off, "liga" off;

//   /* b5/12_regular */
//   font-family: Lato;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 18px; /* 150% */
//   letter-spacing: 0.4px;
// `;

// const Date = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;

// const DateIcon = styled.div`
//   width: 12px;
//   height: 12px;
// `;

// const DateText = styled.div`
//   color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
//   font-feature-settings: "clig" off, "liga" off;

//   /* b5/12_regular */
//   font-family: Lato;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 18px; /* 150% */
//   letter-spacing: 0.4px;
// `;

// const ArticleCard: React.FC<ArticleCardProps> = ({
//   title,
//   link,
//   imageUrl,
//   date,
//   readingTime,
//   domain,
//   loading,
// }) => {
//   const shortDomain:string = domain?.startsWith("www.") ? domain.slice(4, -4) : domain;
//   const isZebpay = shortDomain?.toLowerCase() === "zebpay";

//   return (
//     <CardContainer>
//       <InsideFrame>
//         <CardImage>
//           {loading ? (
//             <Skeleton width="100%" height="100%" />
//           ) : (
//               <img src={imageUrl} alt={title} />
//           )}
//         </CardImage>
//         <CardInfo>
//           <CardInfoHeader>
//             {loading ? (
//               <Skeleton width="80px" height="20px" />
//             ) : (
//               <DomainName isZebpay={isZebpay}>{shortDomain}</DomainName>
//             )}
//             {loading ? (
//               <Skeleton width="100%" height="20px" />
//             ) : (
//               <Title href={link} target="_blank" rel="noopener noreferrer">
//                 {title}
//               </Title>
//             )}
//             {loading ? (
//               <Skeleton width="100%" height="40px" />
//             ) : (
//               <Description>Lorem ipsum dolor sit amet.</Description>
//             )}
//           </CardInfoHeader>
//           <CardInfoFooter>
//             <ReadingTime>
//               {loading ? (
//                 <Skeleton width="12px" height="12px" circle />
//               ) : (
//                 <ReadingTimeIcon>
//                   {/* Insert your SVG icon here */}
//                 </ReadingTimeIcon>
//               )}
//               {loading ? (
//                 <Skeleton width="50px" height="12px" />
//               ) : (
//                 <ReadingTimeText>{readingTime}</ReadingTimeText>
//               )}
//             </ReadingTime>
//             <Date>
//               {loading ? (
//                 <Skeleton width="12px" height="12px" circle />
//               ) : (
//                 <DateIcon>{/* Insert your SVG icon here */}</DateIcon>
//               )}
//               {loading ? (
//                 <Skeleton width="50px" height="12px" />
//               ) : (
//                 <DateText>{date}</DateText>
//               )}
//             </Date>
//           </CardInfoFooter>
//         </CardInfo>
//       </InsideFrame>
//     </CardContainer>
//   );
// };

// export default ArticleCard;

/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import Skeleton from "react-loading-skeleton";

interface ArticleCardProps {
  title: string | JSX.Element;
  link: string;
  imageUrl: string | JSX.Element;
  date: string | JSX.Element;
  readingTime: string | JSX.Element;
  domain: string | JSX.Element;
}

const CardContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

const InsideFrame = styled.div`
  display: flex;
  width: 205px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

const CardImage = styled.div`
  display: flex;
  height: 108px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const CardInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const DomainName = styled.div`
  display: flex;
  width: 120px;
  height: 22px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const Title = styled.a`
  display: flex;
  height: 24px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const Description = styled.div`
  display: flex;
  height: 36px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const CardInfoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`;

const ReadingTime = styled.div`
  display: flex;
  width: 80px;
  height: 18px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ReadingTimeIcon = styled.div`
  width: 12px;
  height: 12px;
`;

const ReadingTimeText = styled.div`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
  font-feature-settings: "clig" off, "liga" off;

  /* b5/12_regular */
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: 0.4px;
`;

const Date = styled.div`
  display: flex;
  width: 80px;
  height: 18px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(
    --Shimmer-BGBlue_Shimmer,
    linear-gradient(97deg, rgba(61, 61, 102, 0.92) -40.76%, #1e1e41 135.88%)
  );
  animation: skeleton-loading 1.5s infinite;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    
    100% {
      background-position: -200% 0;
    }
  }
`;

const DateIcon = styled.div`
  width: 12px;
  height: 12px;
`;

const DateText = styled.div`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
  font-feature-settings: "clig" off, "liga" off;

  /* b5/12_regular */
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: 0.4px;
`;

const Shimmer: React.FC = () => {


  return (
    <CardContainer>
      <InsideFrame>
        <CardImage>
          
        </CardImage>
        <CardInfo>
          <CardInfoHeader>
            <DomainName></DomainName>
            <Title >
            </Title>
            <Description>
            </Description>
          </CardInfoHeader>
          <CardInfoFooter>
            <ReadingTime>
              <ReadingTimeIcon>
                {/* Insert your SVG icon here */}
              </ReadingTimeIcon>
              <ReadingTimeText></ReadingTimeText>
            </ReadingTime>
            <Date>
              <DateIcon>{/* Insert your SVG icon here */}</DateIcon>
              <DateText></DateText>
            </Date>
          </CardInfoFooter>
        </CardInfo>
      </InsideFrame>
    </CardContainer>
  );
};

export default Shimmer;
