const ref = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

ref.input.addEventListener('input', onInput);

function onInput() {
    ref.text.style.fontSize = `${ref.input.value}px`;

}