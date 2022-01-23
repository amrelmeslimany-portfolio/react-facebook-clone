import { useEffect, useState } from "react";
import StorySkelton from "./StorySkelton";
import StoryItem from "./StoryItem";

export default function Story() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  });
  return (
    <div className="space-x-2 p-4 maxsm:pl-0 flex overflow-x-auto hide-scroll-style">
      {isLoading ? (
        <>
          <StorySkelton />
          <StorySkelton />
          <StorySkelton />
          <StorySkelton />
          <StorySkelton />
        </>
      ) : (
        <>
          <StoryItem createStory />
          <StoryItem />
          <StoryItem />
          <StoryItem />
          <StoryItem />
          <StoryItem />
          <StoryItem />
        </>
      )}
    </div>
  );
}
