export class Reply {
    userId: string;
    conteudo: string;
  
    constructor(userId: string, conteudo: string) {
      this.userId = userId;
      this.conteudo = conteudo;
    }
  }