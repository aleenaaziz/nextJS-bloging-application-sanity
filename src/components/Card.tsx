import { PortableText } from "@portabletext/react";
import React, { useState } from "react";

interface CardProps {
  imageSrc: string | null;
  title: string;
  description: any; // Accept rich text blocks
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent((prev) => !prev);
  };

  // Truncate rich text to the first block (can be adjusted for more lines)
  const truncatedDescription = description.slice(0, 2); // Show first 2 blocks as preview

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src={imageSrc || "/default-image.jpg"}
        alt={title || "Image"}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <PortableText value={showFullContent ? description : truncatedDescription} />
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReadMore}
        >
          {showFullContent ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
