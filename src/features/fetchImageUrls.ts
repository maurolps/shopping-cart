import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";

type TImageUrl = {
  name: string;
  url: string;
};

export function fetchImageUrls() {
  const imageUrls = [] as TImageUrl[];
  const storageRef = ref(storage);
  const imgList = listAll(storageRef);

  imgList
    .then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          imageUrls.push({ name: item.name, url: url });
          console.log(imageUrls);
        });
      });
    })
    .catch((err) => console.log(err));
}
