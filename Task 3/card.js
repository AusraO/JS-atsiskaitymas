export default class UserCards{
    constructor(user){
      this.login = user.login;
      this.avatar_url=user.avatar_url
      return this.render();
    }
    render(){
      this.boxDiv = document.createElement('div');

      this.boxIdPlace = document.createElement('h1');
      this.boxIdPlaceText = document.createTextNode(this.login);
      this.boxIdPlace.appendChild(this.boxIdPlaceText);
  
      this.picture = document.createElement('img');
      this.picture.setAttribute('src', this.avatar_url);
      this.picture.setAttribute('alt', 'profile photo');
  
      this.boxDiv.append(this.boxIdPlace, this.picture);
  
      return this.boxDiv;
    }
  }