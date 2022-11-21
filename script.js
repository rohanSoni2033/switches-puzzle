const switchAlgorithm = {
  first: ['sixth', 'eighth'],
  second: ['seventh', 'forth'],
  third: ['first', 'seventh'],
  forth: ['third', 'fifth'],
  fifth: ['sixth', 'first'],
  sixth: ['fifth', 'second'],
  seventh: ['second', 'eighth'],
  eighth: ['third', 'forth'],
};

const switchesContainer = document.querySelector('.switchesContainer');

Object.keys(switchAlgorithm).forEach((title, index) => {
  const markup = `
    <div class="switch">
        <input type="checkbox" class="checkbox" id="${title}_checkbox" data-switchId=${title} />
        <label for="${title}_checkbox">
          <div class="switch-button">
            <div class="switch-toggle">
                ${index + 1}
            </div>
          </div>
        </label>
    </div>`;
  switchesContainer.insertAdjacentHTML('beforeend', markup);
});

document.querySelectorAll('.checkbox').forEach(switchButton => {
  switchButton.addEventListener('change', function () {
    switchAlgorithm[this.dataset.switchid].forEach(btn => {
      const targetButton = document.querySelector(
        `.checkbox[data-switchid=${btn}]`
      );
      targetButton.checked = !targetButton.checked;
    });
  });
});
