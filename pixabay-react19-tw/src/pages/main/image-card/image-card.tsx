import { HitEntityType } from '@/api/pictures/pictures.schemas';

interface ImageCardProps {
  hit: HitEntityType;
}

export const ImageCard = ({ hit }: ImageCardProps) => {
  const tags = hit.tags.split(',');

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src={hit.webformatUrl} alt="" className="w-full" />
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
        {tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="my-1 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
