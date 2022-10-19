export class CreatePostDto {
  postTitle: string;
  postImage: string;
  sections: [
    {
      title: string;
      text: string;
    },
  ];
}
