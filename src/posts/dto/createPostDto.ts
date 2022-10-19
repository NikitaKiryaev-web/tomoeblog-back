export class CreatePostDto {
  postTitle: string;
  postImage: string;
  thumbnail: string;
  sections: [
    {
      title: string;
      text: string;
    },
  ];
}
