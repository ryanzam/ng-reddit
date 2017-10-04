/**
 * Created by ramzan on 10/2/17.
 */
export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title:string, link:string, votes?: number){
  this.title = title;
  this.link = link;
  this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
    console.log('voteup clicked');
  }

  voteDown(): void{
    this.votes -=1;
  }

  domain(): string{
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }
    catch (err) {
      return null;
    }
  }
}
