import { getImageUrlV2 } from '@/utils/utils';

interface Person {
  name: string;
  imageId: string;
}

interface Props {
  person: Person;
  size: number;
}

function MyAvatar({ person, size }: Props) {
  const imageSize = size < 90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
