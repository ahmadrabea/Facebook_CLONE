import React from "react";
import StoryCard from "./StoryCard";

const DUMMY_STORIES = [
  {
    name: "CR7",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/300px-Cristiano_Ronaldo_2018.jpg",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/300px-Cristiano_Ronaldo_2018.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },

  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  const stories = DUMMY_STORIES.map((story) => (
    <StoryCard
      key={story.src}
      name={story.name}
      src={story.src}
      profile={story.profile}
    />
  ));
  return <div className="flex justify-center space-x-3 mx-auto">{stories}</div>;
};

export default Stories;

{
  /* <StoryCard name={story.name} src={story.src} profile={story.profile} /> */
}
