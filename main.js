let cards = document.querySelectorAll('.cards');

for(card of cards){
  card.addEventListener('click', function(){
    this.classList.toggle('flip')
  })
}