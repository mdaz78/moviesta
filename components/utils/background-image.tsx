interface BackgroundImageProps {
  imageUrl: string;
  className?: string;
}

const BackgroundImage = ({
  imageUrl,
  className = '',
}: BackgroundImageProps) => {
  return (
    <div
      className={`h-[250px] rounded-t-md bg-cover border-b border-gray-200 ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};

export default BackgroundImage;
