"use client"; // Mark this as a Client Component

import Card from "./Card";

interface CardListProps {
  data: {
    mainImage?: {
      asset: { url: string };
    };
    title: string;
    body: any; // Accept rich text objects
  }[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1  gap-6 p-4">
      {data.map((val, index) => (
        <div key={index} className="flex items-center justify-center">
          <Card
            imageSrc={val.mainImage ? val.mainImage.asset.url : null}
            title={val.title || "Untitled"}
            description={val.body || "No description available."}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
