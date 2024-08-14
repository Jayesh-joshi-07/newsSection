/** @jsxImportSource @emotion/react */
"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  main,
  container,
  headerFrame,
  header,
  section,
  news,
  filterAndUpdownFrame,
  filter,
  updown,
  innerDiv,
  newsletter,
  innerCard,
  newsChild,
  newsHeader,
  mailIcon,
  heading,
  quote,
  form,
  email,
  subscribe,
  tradingBanner,
  topology,
  frame,
  anotherFrame,
  zebpayImageDiv,
  textWrapper,
  title,
  subtitle,
  buttonGroup,
  button,
} from "./styles";
import { Icon, Input, Button } from "zebpay-ui";
import SkeletonWrapper from "../SkeletonWrapper";
import ArticleCard from "./ArticleCard";
import { getCryptoNews } from "./apiService";
import FilterIcon from "./FilterIcon";
import UpDownIcon from "./UpDownIcon";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200; // Average reading speed
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return `${Math.ceil(minutes)} min read`;
};

const getDomain = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch {
    return "Unknown";
  }
};

const isValidDate = (date: string): boolean => !isNaN(Date.parse(date));

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedArticles = await getCryptoNews();
        setArticles(fetchedArticles);
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.error("Error fetching cryptocurrency news:", err);
        setError("Failed to fetch news.");
        setLoading(false); // Set loading to false on error
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        setIsScrolled(sectionRef.current.scrollTop > 0);
      }
    };

    const sectionElement = sectionRef.current;
    sectionElement?.addEventListener("scroll", handleScroll);

    return () => {
      sectionElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={main}>
      <div css={container}>
        <div css={headerFrame(isScrolled)}>
          <div css={header}>
            <div css={news}>Crypto News</div>
            <div css={filterAndUpdownFrame}>
              <div css={filter}>
                <FilterIcon />
              </div>
              <div css={updown}>
                <UpDownIcon />
              </div>
            </div>
          </div>
        </div>
        <div css={section} ref={sectionRef}>
          {error ? (
            <div>{error}</div>
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                width: "100%",
              }}
            >
              {loading
                ? Array.from({ length: 12 }).map((_, index) => (
                    <ArticleCard
                      key={index}
                      title={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={45}
                          width={170}
                          borderRadius={4}
                        />
                      }
                      link={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={45}
                          width={170}
                          borderRadius={4}
                        />
                      }
                      imageUrl={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={100}
                          width={100}
                          borderRadius={4}
                        />
                      }
                      date={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={22}
                          width={73}
                          borderRadius={4}
                        />
                      }
                      readingTime={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={22}
                          width={73}
                          borderRadius={4}
                        />
                      }
                      domain={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={22}
                          width={90}
                          borderRadius={4}
                        />
                      }
                    />
                  ))
                : articles.map((article, index) => (
                    <ArticleCard
                      key={index}
                      title={article.title}
                      link={article.url}
                      imageUrl={article.urlToImage}
                      date={
                        isValidDate(article.publishedAt)
                          ? new Date(article.publishedAt).toLocaleDateString()
                          : "Unknown Date"
                      }
                      readingTime={calculateReadingTime(article.content)}
                      domain={getDomain(article.url)}
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
      <div css={innerDiv}>
        <div css={innerCard}>
          <div css={newsletter}>
            <div css={newsChild}>
              <div css={newsHeader}>
                {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={100} // Adjust height based on expected newsChild size
                      width={100} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                  <div css={mailIcon} />
                )}
                {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={30} // Adjust height based on expected newsChild size
                      width={200} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                  <div css={heading}>ZebPay Blog Digest</div>
                )}
                {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={40} // Adjust height based on expected newsChild size
                      width={315}  // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                  <div css={quote}>
                    Stay ahead with our weekly crypto blogs & updates!
                  </div>
                )}
              </div>
              {loading ? (
                <div>
                  <SkeletonWrapper
                    isLoading={loading}
                    height={50} // Adjust height based on expected newsChild size
                    width={315}  // Use numeric value for full width
                    borderRadius={4}
                  />
                </div>
              ) : (
                <div css={form}>
                  <Input
                    label="Enter Email Address"
                    onBlur={function noRefCheck() {}}
                    onChange={function noRefCheck() {}}
                    onFocus={function noRefCheck() {}}
                    onKeyDown={function noRefCheck() {}}
                    onWheel={function noRefCheck() {}}
                    placeholder="Enter Email Address"
                    style={{
                      name: "3s4yqf",
                      styles: "width:100%",
                    }}
                  />
                </div>
              )}
              {loading ? (
                <div>
                  <SkeletonWrapper
                    isLoading={loading}
                    height={50} // Adjust height based on expected newsChild size
                    width={315}  // Use numeric value for full width
                    borderRadius={4}
                  />
                </div>
              ) : (
                <Button
                  onClick={function noRefCheck() {}}
                  size="full-width"
                  type="primary"
                >
                  Subscribe
                </Button>
              )}
            </div>
          </div>
          <div css={tradingBanner}>
            <div css={topology}></div>
            <div css={frame}>
              
              <div css={anotherFrame}>
              {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={70} // Adjust height based on expected newsChild size
                      width={70} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                <div css={zebpayImageDiv}>
                  <img src="<path-to-image>" alt="ZebPay" />
                </div>)}
                <div css={textWrapper}>
                {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={30} // Adjust height based on expected newsChild size
                      width={200} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                  <div css={title}>Stay Informed, Trade Smart</div>)}
                  {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={45} // Adjust height based on expected newsChild size
                      width={300} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                  <div css={subtitle}>
                    Get real-time crypto updates and trade Crypto on ZebPay.
                    Download now!
                  </div>)}
                </div>
              </div>
              <div css={buttonGroup}>
              {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={35} // Adjust height based on expected newsChild size
                      width={145} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                <Button
                  onClick={function noRefCheck() {}}
                  size="medium"
                  type="primary"
                >
                  AMAZON
                </Button>)}
                {loading ? (
                  <div>
                    <SkeletonWrapper
                      isLoading={loading}
                      height={35} // Adjust height based on expected newsChild size
                      width={145} // Use numeric value for full width
                      borderRadius={4}
                    />
                  </div>
                ) : (
                <Button
                  onClick={function noRefCheck() {}}
                  size="medium"
                  type="primary"
                >
                  AMAZON
                </Button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
