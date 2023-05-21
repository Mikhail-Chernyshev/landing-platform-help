const cancerContainer = document.getElementById('cancer');
const stagesSection = document.getElementById('stages');
const listSection = document.getElementById('list');
const instrTitleElement = document.getElementById('instr-title');
const instrSubtitleElement = document.getElementById('instr-subtitle');
const serviceButtonsContainer = document.getElementById('services-buttons');
const instrSelectElement = document.getElementById('instr-select');
const instrSelectElementSecond = document.getElementById('instr-select-2');
const servicesSection = document.getElementById('services');
const caseTextElement = document.getElementById('instr-case-1');
const professionTextElement = document.getElementById('instr-prof-1');
const clinicsSection = document.getElementById('clinics');
const typeTextElement = document.getElementById('commun-type');
const serviceTextElementFirst = document.getElementById('commun-service-1');
const serviceTextElementThird = document.getElementById('commun-service-3');
const serviceTextElementFourth = document.getElementById('commun-service-4');
const startContainer = document.getElementById('start');
const startSecondContainer = document.getElementById('start-2');
const firstStageBlock = document.getElementById('stage-first');
const symptomsAfterFirstStageBlock = document.getElementById(
  'symptomsAfterClickFirstStage'
);
const footer = document.getElementById('footer');
const header = document.getElementById('header');
const aboutPlatfromBlock = document.getElementById('about-platform');
const searchBlock = document.getElementById('search');
const casesBlock = document.getElementById('cases');
const extraHelpBlock = document.getElementById('extra-help');
const extraHelpTitle = document.getElementById('extra-help-title');
const extraHelpSubtitleFirst = document.getElementById('extra-help-subtitle-1');
const extraHelpSubtitleSecond = document.getElementById(
  'extra-help-subtitle-2'
);
const extraHelpSubtitleThird = document.getElementById('extra-help-subtitle-3');
const extraHelpSubtitleFourth = document.getElementById(
  'extra-help-subtitle-4'
);
const extraHelpTextFirst = document.getElementById('extra-help-text-1');
const extraHelpTextSecond = document.getElementById('extra-help-text-2');
const extraHelpTextThird = document.getElementById('extra-help-text-3');
const extraHelpTextFourth = document.getElementById('extra-help-text-4');
const extraHelpGetElement = document.getElementById('extra-help-get');
const extraHelpGetElementSecond = document.getElementById('extra-help-get-2');
const stageWrapperXBlock = document.getElementById('stage-wrapper-x');
const buttonBookindVisistBigElement =
  document.getElementById('symptoms-order-1');
const buttonBookindVisistBigSecondElement =
  document.getElementById('symptoms-order-2');
const buttonStartInStartElement = document.querySelector('.start__button');
const appointmentSection = document.getElementById('appointment');
const appointmentSecondSection = document.getElementById('appointment-2');
const instructionsSection = document.getElementById('instructions');
const communitysSection = document.getElementById('communitys');
const buttonOrderClinicElements = document.querySelectorAll('.clinic__order-1');
const buttonOrderClinicSecondElements =
  document.querySelectorAll('.clinic__order-2');
const buttonOrderClinicThirdElements =
  document.querySelectorAll('.clinic__order-3');
const popupChooseDate = document.querySelector('.popup-date');
const popupChooseDateConfirmElement = document.getElementById(
  'popup-date-confirm-button-1'
);
const popupChooseDateConfirmSecondElement = document.getElementById(
  'popup-date-confirm-button-1'
);
const popupSuccess = document.querySelector('.popup-success');
const popupSuccessConfirm = document.getElementById('popup-success-confirm');
const popupSuccessConfirmSecond = document.getElementById(
  'popup-success-confirm-2'
);
const popupBooking = document.getElementById('popup-booking');
const popupGosuslugi = document.querySelector('.popup-gosuslugi');
const helloBlock = document.getElementById('hello');
const healthBlock = document.getElementById('health');
const stageHelpFirstBlock = document.getElementById('stages-help-1');
const symptomsSecond = document.getElementById('symptoms-2');
const bookingFreeBlock = document.getElementById('booking-free');
const bookingPayBlock = document.getElementById('booking-pay');
const gosuslugiEnterButton = document.querySelector(
  '.popup-gosuslugi__gosuslugi'
);
const pricePopupSuccessElement = document.getElementById('popup-success-price'); //хзаменить на Беслпатно
const linePopupSuccessElement = document.getElementById('popup-success-line'); //убрать
const enterPopupSuccessElement = document.getElementById('popup-success-enter'); //убрать
const descriptionPopupSuccessElement = document.getElementById(
  'popup-success-description'
); //убрать
const timelineFirst = document.getElementById('timeline-1');
const timelineSecond = document.getElementById('timeline-2');

console.log(firstStageBlock);

cancerContainer.addEventListener('click', () => {
  stagesSection.classList.add('stages_visible');
  startContainer.classList.add('start_visible');
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
});

firstStageBlock.addEventListener('click', () => {
  console.log(firstStageBlock);
  footer.classList.add('footer_hidden');
  startContainer.classList.add('start_fixed');
  startContainer.classList.add('start_first-stage');
  header.classList.add('list_unvisible');
  aboutPlatfromBlock.classList.add('list_unvisible');
  search.classList.add('list_unvisible');
  cases.classList.add('list_unvisible');
  clinicsSection.classList.remove('clinics_visible');
  symptomsAfterFirstStageBlock.classList.add('symptoms_visible');
  extraHelpBlock.classList.add('symptoms_visible');
  extraHelpTitle.innerHTML = 'Как еще можем помочь';
  extraHelpSubtitleFirst.innerHTML = 'Получайте психологическую поддержку';
  extraHelpSubtitleSecond.innerHTML = 'Получайте психологическую поддержку';
  serviceTextElementThird.innerHTML = 'Жизнь после онкологических заболеваний';
  serviceTextElementFourth.innerHTML = 'Ваша жизнь сильнее рака';
  extraHelpTextFirst.innerHTML =
    'Диагноз онкологического заболевания может быть трудным и вызвать эмоциональное напряжение, поэтому важно получить своевременную психологическую поддержку';
  extraHelpTextSecond.innerHTML =
    'Онкологические заболевания подразумевают проведение регулярных консультаций со специалистом';
  extraHelpGetElement.innerHTML = 'Получить услугу';
  extraHelpGetElementSecond.innerHTML = 'Получить услугу';
  // stageWrapperXBlock.classList.add('stages__wrapper-x_hidden');
});

buttonBookindVisistBigElement.addEventListener('click', () => {
  console.log(buttonBookindVisistBigElement);
  appointmentSection.classList.add('appointment_visible');
  symptomsAfterFirstStageBlock.classList.remove('symptoms_visible');
  extraHelpBlock.classList.remove('symptoms_visible');
  instructionsSection.classList.add('instructions_unvisible');
  communitysSection.classList.add('communitys_unvisible');
  startContainer.classList.remove('start_visible');
});

buttonOrderClinicElements.forEach((el) => {
  el.addEventListener('click', () => {
    appointmentSection.classList.remove('appointment_visible');
    popupChooseDate.classList.add('popup_opened');
    // popupChooseDateConfirmSecondElement.classList.add('popup_closed');
  });
});

popupChooseDateConfirmElement.addEventListener('click', () => {
  console.log(popupChooseDateConfirmElement);
  popupChooseDate.classList.remove('popup_opened');
  popupSuccess.classList.add('popup_opened');
  // popupSuccessConfirm.classList.add('communitys_unvisible');
});

popupSuccessConfirm.addEventListener('click', () => {
  console.log(popupSuccessConfirm);
  header.classList.remove('list_unvisible');
  footer.classList.remove('footer_hidden');
  communitysSection.classList.remove('communitys_unvisible');
  popupSuccess.classList.add('popup_closed');
  instructionsSection.classList.remove('instructions_unvisible');
  helloBlock.classList.add('hello_opened');
  extraHelpBlock.classList.add('symptoms_visible');
  instrSelectElement.classList.remove('stages_visible');
  instrSelectElementSecond.classList.add('popup_opened');
  extraHelpTitle.innerHTML = 'Дополнительная помощь';
  extraHelpSubtitleFirst.innerHTML = 'Материальная помощь и льготы';
  extraHelpSubtitleSecond.innerHTML = 'Нематериальная помощь';
  extraHelpSubtitleThird.innerHTML = 'Юридическая помощь';
  extraHelpSubtitleFourth.innerHTML = 'Психологическая помощь';
  extraHelpTextFirst.innerHTML =
    'Услуги, которые можете получить за счёт Государства, фондов и НКО';
  extraHelpTextSecond.innerHTML = 'Консультации НКО и специалистов';
  extraHelpTextThird.innerHTML =
    'Помощь в юридических вопросах от специалистов';
  extraHelpTextFourth.innerHTML = 'Моральная поддержка от профессионалов';
});

stageHelpFirstBlock.addEventListener('click', () => {
  console.log(stageHelpFirstBlock);
  footer.classList.add('footer_hidden');
  instructionsSection.classList.add('instructions_unvisible');
  communitysSection.classList.add('communitys_unvisible');
  extraHelpBlock.classList.remove('symptoms_visible');
  header.classList.add('list_unvisible');
  helloBlock.classList.remove('hello_opened');
  symptomsSecond.classList.add('symptoms_visible');
  startSecondContainer.classList.add('start_visible');
});

buttonBookindVisistBigSecondElement.addEventListener('click', () => {
  console.log(buttonBookindVisistBigSecondElement);
  startSecondContainer.classList.remove('start_visible');
  symptomsSecond.classList.remove('symptoms_visible');
  popupBooking.classList.add('popup_opened');
});

bookingFreeBlock.addEventListener('click', () => {
  buttonOrderClinicThirdElements.forEach((el) => {
    el.classList.add('communitys_unvisible');
  });
  buttonOrderClinicSecondElements.forEach((el) => {
    el.innerHTML = 'Записаться бесплатно';
  });
  popupBooking.classList.remove('popup_opened');
  appointmentSecondSection.classList.add('appointment_visible');
});

bookingPayBlock.addEventListener('click', () => {
  buttonOrderClinicSecondElements.forEach((el) => {
    el.classList.add('communitys_unvisible');
  });
  popupBooking.classList.remove('popup_opened');
  appointmentSecondSection.classList.add('appointment_visible');
  console.log(bookingPayBlock);
});

buttonOrderClinicSecondElements.forEach((el) => {
  el.addEventListener('click', () => {
    console.log('ff');
    popupGosuslugi.classList.add('popup_opened');
    appointmentSecondSection.classList.remove('appointment_visible');
  });
});

buttonOrderClinicThirdElements.forEach((el) => {
  el.addEventListener('click', () => {
    appointmentSecondSection.classList.remove('appointment_visible');
  });
  el.addEventListener('click', () => {
    appointmentSecondSection.classList.remove('appointment_visible');
    popupChooseDate.classList.add('popup_opened');
    popupChooseDateConfirmElement.classList.add('community_unvisible');
  });
});

gosuslugiEnterButton.addEventListener('click', () => {
  popupSuccessConfirm.classList.add('communitys_unvisible');
  popupGosuslugi.classList.remove('popup_opened');
  popupSuccess.classList.remove('popup_closed');
  popupSuccessConfirmSecond.classList.remove('popup-date__confirm_hidden');
  linePopupSuccessElement.classList.add('communitys_unvisible');
  enterPopupSuccessElement.classList.add('communitys_unvisible');
  descriptionPopupSuccessElement.classList.add('communitys_unvisible');
  pricePopupSuccessElement.classList.add('communitys_unvisible');
  console.log('dsds');
});

popupSuccessConfirmSecond.addEventListener('click', () => {
  console.log('ddddd');
  console.log(popupSuccessConfirm);
  timelineFirst.classList.add('timeline_hidden');
  timelineSecond.classList.remove('timeline_hidden');
  header.classList.remove('list_unvisible');
  footer.classList.remove('footer_hidden');
  communitysSection.classList.remove('communitys_unvisible');
  popupSuccess.classList.add('popup_closed');
  instructionsSection.classList.remove('instructions_unvisible');
  helloBlock.classList.add('hello_opened');
  extraHelpBlock.classList.add('symptoms_visible');
  instrSelectElement.classList.remove('stages_visible');
  instrSelectElementSecond.classList.add('popup_opened');
  extraHelpTitle.innerHTML = 'Дополнительная помощь';
  extraHelpSubtitleFirst.innerHTML = 'Материальная помощь и льготы';
  extraHelpSubtitleSecond.innerHTML = 'Нематериальная помощь';
  extraHelpSubtitleThird.innerHTML = 'Юридическая помощь';
  extraHelpSubtitleFourth.innerHTML = 'Психологическая помощь';
  extraHelpTextFirst.innerHTML =
    'Услуги, которые можете получить за счёт Государства, фондов и НКО';
  extraHelpTextSecond.innerHTML = 'Консультации НКО и специалистов';
  extraHelpTextThird.innerHTML =
    'Помощь в юридических вопросах от специалистов';
  extraHelpTextFourth.innerHTML = 'Моральная поддержка от профессионалов';
});
