import {Tag} from "./tag";

export class Article {
  uuid: string;
  title: string;
  content: string;
  personal: boolean;
  tags: Tag[];
  createTime: string;
  updateTime: string;

  constructor(uuid: string, title: string, content: string, personal: boolean, tags: Tag[], createTime: string, updateTime: string) {
    this.uuid = uuid;
    this.title = title;
    this.content = content;
    this.personal = personal;
    this.tags = tags;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }
}
