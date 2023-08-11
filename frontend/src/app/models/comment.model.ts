export class Comment {
  id: string;
  comment: string;
  userId: string;
  flightId: string;
  createdAt?: Date;
  updatedAt?: Date;
  tags: string[];

  constructor(id: string, comment: string, userId: string, flightId: string, tags: string[], createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.comment = comment;
    this.userId = userId;
    this.flightId = flightId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.tags = tags;
  }
}

