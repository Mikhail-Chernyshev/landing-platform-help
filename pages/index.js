const cancerContainer = document.getElementById('cancer');
const stagesSection = document.getElementById('stages');
const listSection = document.getElementById('list');
const instrTitleElement = document.getElementById('instr-title');
const instrSubtitleElement = document.getElementById('instr-subtitle');
const serviceButtonsContainer = document.getElementById('services-buttons');
const instrSelectElement = document.getElementById('instr-select');
const servicesSection = document.getElementById('services');
const caseTextElement = document.getElementById('instr-case-1');
const professionTextElement = document.getElementById('instr-prof-1');
const clinicsSection = document.getElementById('clinics');
const typeTextElement = document.getElementById('commun-type');
const serviceTextElement = document.getElementById('commun-service');
const startContainer = document.getElementById('start');

console.log(typeTextElement);

cancerContainer.addEventListener('click', () => {
  console.log(cancerContainer);
  stagesSection.classList.add('stages_visible');
  startContainer.classList.add('stages_visible');
  clinicsSection.classList.add('clinics_visible');
  instrSelectElement.classList.add('stages_visible');
  listSection.classList.add('list_unvisible');
  instrSubtitleElement.classList.add('list_unvisible');
  servicesSection.classList.add('list_unvisible');
  serviceButtonsContainer.classList.add('list_unvisible');
  instrTitleElement.innerHTML = '72 инструкции     <br/>  по онкологии';
  professionTextElement.innerHTML = 'Евгения Кузьмина, врач-онколог';
  caseTextElement.innerHTML =
    'Что делать при нахождении опухоли или иного новобразования';
  typeTextElement.innerHTML = 'Онкология';
  serviceTextElement.innerHTML = 'Психологическая помощь онкобольным';
});
