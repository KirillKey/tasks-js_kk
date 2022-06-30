const wrapper = document.querySelector('.wrapper-modal');
const container = document.querySelector('.container');
const btn = document.querySelector('#openOverlay');

  btn.addEventListener('click', function(e){
    e.preventDefault();

    const overlay = document.createElement('div');
    overlay.classList.add('overlay')
    wrapper.appendChild(overlay);

    const modal = document.createElement('div');
    modal.classList.add('modal')

    const content = document.createElement('div');
    content.classList.add('content')
    content.innerHTML = 'Hello <b>World</b>!';

    const close = document.createElement('a');
    close.classList.add('close');
    close.textContent = 'x';
    close.href = '#';

    overlay.appendChild(modal);
    modal.appendChild(close);    
    modal.appendChild(content);

    close.addEventListener('click', function(){
      wrapper.removeChild(overlay);

    })

    overlay.addEventListener('click', (e) =>{
      if (e.target == overlay) {

        wrapper.removeChild(overlay);
      }
    });
  }
  );