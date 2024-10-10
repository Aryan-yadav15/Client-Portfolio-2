
import React from "react";

import LinkBox from "./_shared/LinkBox";

const Links = () => {
    return (
      <div className="flex flex-row gap-5">
        <LinkBox imageUrl="/linkedin-icon.svg" text="Text 1" />
        <div className="flex-2 bg-white rounded-xl">ji</div>
        <LinkBox imageUrl="/x.svg" text="Text 3" />
      </div>
    );
  };
  
  export default Links;
  