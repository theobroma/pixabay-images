interface Props {
  // hit: HitsEntityType;
  hit: any;
}

export const ImageCard = ({ hit }: Props) => {
  const tags = hit.tags.split(',');

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src={hit.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-purple-500">Photo by {hit.user}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {hit.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {hit.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {hit.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag: any, index: number) => (
          <span
            key={index}
            className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
