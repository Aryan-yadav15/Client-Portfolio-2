import React from "react"
import LinkBox from "./_shared/LinkBox"
import Image from "next/image"

const Links = () => {
  return (
    <div className="flex flex-col h-40 lg:flex-row gap-5">
      {/* Open LinkedIn in a new tab */}
      <LinkBox
        imageUrl="/linkedin-icon.svg"
        text="LinkedIn"
        href="https://www.linkedin.com"
        target="_blank" // Opens in new tab
        rel="noopener noreferrer" // Security feature
      />

      {/* Gmail link with a draft to your email */}
      <LinkBox
        imageUrl="/google-gmail.svg"
        text="Gmail"
        href="mailto:youremail@example.com?subject=Contact&body=Hello!" // Customize the email address, subject, and body
      />
    </div>
  )
}

export default Links
