import React, { useState } from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  const [newPost, setNewPost] = useState(false); // to render the new posts without refreshing the page
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
        {/* Stories */}

        <Stories />

        {/* Input box */}
        <InputBox newPostHandler={setNewPost} newPost={newPost} />
        <Posts newPost={newPost} />
      </div>
    </div>
  );
};

export default Feed;
