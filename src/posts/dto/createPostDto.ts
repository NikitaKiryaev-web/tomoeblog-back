export class CreatePostDto {
  postTitle: string;
  sections: [
    {
      title: string;
      text: string;
    },
  ];
}
