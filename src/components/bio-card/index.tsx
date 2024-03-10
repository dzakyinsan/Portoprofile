interface BioCardProps {
  bioTitle: string;
  bio: string;
}

/**
 * Renders an BioCard component.
 * @param bioTitle
 * @param bio
 * @returns JSX element representing the BioCard.
 */
const BioCard: React.FC<BioCardProps> = ({ bioTitle, bio }): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="text-center mx-auto px-8">
        <h5 className="card-title">
          <span className="text-base-content opacity-70 py-4">{bioTitle}</span>
        </h5>
        <div className="text-base-content opacity-70 mb-8 text-left">{bio}</div>
      </div>
    </div>
  );
};

export default BioCard;
