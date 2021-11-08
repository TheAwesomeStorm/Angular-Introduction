export interface Photo {
  id: number,
  postDate: string,
  url: string,
  description: string,
  allowComments: boolean,
  likes: number,
  comments: number,
  userId: number
}
