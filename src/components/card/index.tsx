import React from "react";

interface ICardImage {
  /** img source attribute*/
  src: string;
  /** img alt attribute*/
  alt?: string;
}
interface ICardTitle {
  children: string;
}
export interface ICard {
  /** className override */
  className?: string;
}
export interface ICardComposition {
  Image?: React.FC<ICardImage>;
  Title?: React.FC<ICardTitle>;
  Body?: React.FC<any>;
}

const Card: React.FC<ICard> & ICardComposition = ({ ...props }) => {
  return (
    <div
      className="bg-white max-w-lg mx-2 sm:mx-0 rounded overflow-hidden shadow-lg hover:shadow-xl hover:border border-blue-500"
      {...props}
    />
  );
};

export const CardImage: React.FC<ICardImage> = ({ src, alt, ...props }) => (
  <img className="w-full h-48 object-cover" src={src} alt={alt} {...props} />
);
export const CardTitle: React.FC<ICardTitle> = ({ ...props }) => (
  <div className="font-bold text-xl mb-2 mt-2 ml-4" {...props} />
);
export const CardBody: React.FC = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Body = CardBody;

export default Card;
