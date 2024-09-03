import React, { useEffect, useState } from "react";

const FollowersExtractor = ({ url }) => {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const fetchMetaDescription = async () => {
      try {
        // Fetching the HTML content of the page
        const response = await fetch(url);
        const text = await response.text();
        console.log("text", text);
        // Parsing HTML to extract meta description content
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const metaDescription = doc.querySelector(
          "meta[name='description']"
        )?.content;

        if (metaDescription) {
          // Extract the follower count using regex
          const regex = /([\d.,]+[KM]?) Followers/;
          const match = metaDescription.match(regex);

          if (match && match[1]) {
            let followerCount = match[1];

            // Replace "K" with "000" and "M" with "000000"
            followerCount = followerCount
              .replace("K", "000")
              .replace("M", "000000");

            // Convert to a number and format it
            const formattedFollowers = Number(followerCount).toLocaleString();

            setFollowers(formattedFollowers);
          }
        }
      } catch (error) {
        console.error("Error fetching meta description:", error);
      }
    };

    fetchMetaDescription();
  }, [url]);

  return (
    <div>{followers ? <p>Followers: {followers}</p> : <p>Loading...</p>}</div>
  );
};

export default FollowersExtractor;
