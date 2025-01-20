import { MusicIcon, PaintIcon, PhotoIcon } from "../atoms/Icons";
import { InterestItem } from "../atoms/InterestItem";
import sc from "./Interests.module.css";

const interestsData = [
  {
    icon: MusicIcon,
    title: "Music",
    description: "Indie rock | Reggae",
  },
  {
    icon: PaintIcon,
    title: "Art",
    description: "Edvard Munch | Frida Kahlo",
  },
  {
    icon: PhotoIcon,
    title: "Photography",
    description: "Portraits",
  },
];

export const Interests = () => {
  return (
    <div className={sc.interests}>
      <h3 className={sc.interests_title}>Interests</h3>
      <div className={sc.interests_item_container}>
        {interestsData.map((interest, index) => (
          <InterestItem
            key={index}
            icon={interest.icon}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </div>
  );
};
