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
const extraHelpSecondBlock = document.getElementById('extra-help-2');

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
  'popup-date-confirm-button-2'
);
const popupChooseDateConfirmThirdElement = document.getElementById(
  'popup-date-confirm-button-3'
);
const popupSuccess = document.querySelector('.popup-success');
const popupSuccessConfirm = document.getElementById('popup-success-confirm');
const popupSuccessConfirmSecond = document.getElementById(
  'popup-success-confirm-2'
);
const popupFiltersElement = document.getElementById('filters');
const popupBooking = document.getElementById('popup-booking');
const popupGosuslugi = document.querySelector('.popup-gosuslugi');
const helloBlock = document.getElementById('hello');
const healthBlock = document.getElementById('health');
const stageHelpFirstBlock = document.getElementById('stages-help-2-1');
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
const instructionsFilterElement = document.getElementById(
  'instructions__icon-filter'
);
const filtersDoneButton = document.getElementById('filters__done');
const filtersContainer = document.getElementById('filters-block');
const filtersCheckboxElements = document.querySelectorAll(
  '.filters__type-checkbox'
);
const clinicElements = document.getElementById('clinic');
const firstButtonChooseDate = document.getElementById('popup-date-2-day');
const secondButtonChooseDate = document.getElementById('popup-date-4-day');
const buttonStartWayFromSlider = document.getElementById('start-way-button');

console.log(extraHelpBlock);
//start way click
buttonStartWayFromSlider.addEventListener('click', () => {
  if (stagesSection.classList.contains('stages_visible')) {
    console.log('fdf');
    stagesSection.classList.remove('stages_visible');
    header.scrollIntoView();
    footer.classList.add('footer_hidden');
    startContainer.classList.add('start_fixed');
    startContainer.classList.add('start_first-stage');
    header.classList.add('list_unvisible');
    aboutPlatfromBlock.classList.add('list_unvisible');
    search.classList.add('list_unvisible');
    cases.classList.add('list_unvisible');
    clinicsSection.classList.remove('clinics_visible');
    symptomsAfterFirstStageBlock.classList.add('symptoms_visible');
    extraHelpTitle.innerHTML = 'Как еще можем помочь';
    extraHelpSubtitleFirst.innerHTML = 'Получайте психологическую поддержку';
    extraHelpSubtitleSecond.innerHTML = 'Получайте психологическую поддержку';
    serviceTextElementThird.innerHTML =
      'Жизнь после онкологических заболеваний';
    serviceTextElementFourth.innerHTML = 'Ваша жизнь сильнее рака';
    extraHelpTextFirst.innerHTML =
      'Диагноз онкологического заболевания может быть трудным и вызвать эмоциональное напряжение, поэтому важно получить своевременную психологическую поддержку';
    extraHelpTextSecond.innerHTML =
      'Онкологические заболевания подразумевают проведение регулярных консультаций со специалистом';
    extraHelpGetElement.innerHTML = 'Получить услугу';
    extraHelpGetElementSecond.innerHTML = 'Получить услугу';
    extraHelpSecondBlock.classList.add('symptoms_visible');
    // stageWrapperXBlock.classList.add('stages__wrapper-x_hidden');
  } else if (
    symptomsAfterFirstStageBlock.classList.contains('symptoms_visible')
  ) {
    console.log(buttonBookindVisistBigElement);
    appointmentSection.classList.add('appointment_visible');
    appointmentSection.scrollIntoView();
    symptomsAfterFirstStageBlock.classList.remove('symptoms_visible');
    extraHelpBlock.classList.remove('symptoms_visible');
    extraHelpSecondBlock.classList.remove('symptoms_visible');
    instructionsSection.classList.add('instructions_unvisible');
    communitysSection.classList.add('communitys_unvisible');
    startContainer.classList.remove('start_visible');
  }
});
//онкология  клик
cancerContainer.addEventListener('click', () => {
  stagesSection.classList.add('stages_visible');
  startContainer.classList.add('start_visible');
  clinicsSection.classList.add('clinics_visible');
  instrSelectElement.classList.add('stages_visible');
  extraHelpBlock.classList.add('symptoms_visible');
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
//filter click
instructionsFilterElement.addEventListener('click', () => {
  if (
    symptomsAfterFirstStageBlock.classList.contains('symptoms_visible') === true
  ) {
    filtersContainer.classList.add('filters_visible_low');
  } else {
    // popupFiltersElement.classList.add('popup_visible');
    filtersContainer.classList.add('filters_visible');
  }
});
//checkboxs
filtersCheckboxElements.forEach((el) => {
  el.addEventListener('click', () => {
    if (el.classList.contains('filters__type-checkbox_active') === true) {
      el.classList.remove('filters__type-checkbox_active');
    } else {
      el.classList.add('filters__type-checkbox_active');
    }
  });
});
//filters done click
filtersDoneButton.addEventListener('click', () => {
  // popupFiltersElement.classList.remove('popup_visible');
  filtersContainer.classList.remove('filters_visible_low');

  filtersContainer.classList.remove('filters_visible');
});
//первый этап клик
firstStageBlock.addEventListener('click', () => {
  console.log(extraHelpBlock);
  header.scrollIntoView();
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
  extraHelpSecondBlock.classList.add('symptoms_visible');
  // stageWrapperXBlock.classList.add('stages__wrapper-x_hidden');
});
//записаться на осмотр клик
buttonBookindVisistBigElement.addEventListener('click', () => {
  console.log(buttonBookindVisistBigElement);
  appointmentSection.classList.add('appointment_visible');
  appointmentSection.scrollIntoView();
  symptomsAfterFirstStageBlock.classList.remove('symptoms_visible');
  extraHelpBlock.classList.remove('symptoms_visible');
  extraHelpSecondBlock.classList.remove('symptoms_visible');
  instructionsSection.classList.add('instructions_unvisible');
  communitysSection.classList.add('communitys_unvisible');
  startContainer.classList.remove('start_visible');
});

//клик записаться на клинику
buttonOrderClinicElements.forEach((el) => {
  el.addEventListener('click', () => {
    console.log(el);
    extraHelpBlock.classList.remove('symptoms_visible');
    appointmentSection.scrollIntoView();

    // appointmentSection.classList.remove('appointment_visible');
    popupChooseDate.classList.add('popup_opened');
    // popupChooseDateConfirmSecondElement.classList.add('popup_closed');
  });
});
//click on 2 of month
firstButtonChooseDate.addEventListener('click', () => {
  if (
    secondButtonChooseDate.classList.contains('popup-date__date_active') ===
    true
  ) {
    secondButtonChooseDate.classList.remove('popup-date__date_active');
    secondButtonChooseDate.classList.add('popup-date__date_availible');
    firstButtonChooseDate.classList.remove('popup-date__date_availible');
    firstButtonChooseDate.classList.add('popup-date__date_active');
  } else {
    console.log(firstButtonChooseDate);
  }
});
//click on 3 of month
console.log(secondButtonChooseDate);
secondButtonChooseDate.addEventListener('click', () => {
  if (
    firstButtonChooseDate.classList.contains('popup-date__date_active') === true
  ) {
    firstButtonChooseDate.classList.remove('popup-date__date_active');
    firstButtonChooseDate.classList.add('popup-date__date_availible');
    secondButtonChooseDate.classList.remove('popup-date__date_availible');
    secondButtonChooseDate.classList.add('popup-date__date_active');
  } else {
    console.log(secondButtonChooseDate);
  }
});
//календарь выбрать дату
popupChooseDateConfirmElement.addEventListener('click', () => {
  console.log(popupChooseDateConfirmElement);
  appointmentSection.classList.remove('appointment_visible');

  popupChooseDate.classList.remove('popup_opened');
  popupSuccess.classList.add('popup_opened');
  // popupSuccessConfirm.classList.add('communitys_unvisible');
});
//подтвердить запись экран
popupSuccessConfirm.addEventListener('click', () => {
  console.log(popupSuccessConfirm);
  header.classList.remove('list_unvisible');
  footer.classList.remove('footer_hidden');
  communitysSection.classList.remove('communitys_unvisible');
  popupSuccess.classList.remove('popup_opened');
  instructionsSection.classList.remove('instructions_unvisible');
  helloBlock.classList.add('hello_opened');
  extraHelpSecondBlock.classList.add('symptoms_visible');
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
//клик по первому блоку мат помощи
stageHelpFirstBlock.addEventListener('click', () => {
  console.log(stageHelpFirstBlock);
  footer.classList.add('footer_hidden');
  instructionsSection.classList.add('instructions_unvisible');
  communitysSection.classList.add('communitys_unvisible');
  extraHelpBlock.classList.remove('symptoms_visible');
  header.classList.add('list_unvisible');
  helloBlock.classList.remove('hello_opened');
  symptomsSecond.classList.add('symptoms_visible');
  symptomsSecond.classList.add('symptoms_slide');
  symptomsSecond.scrollIntoView();
  extraHelpSecondBlock.classList.remove('symptoms_visible');
  startSecondContainer.classList.add('start_visible');
});
//click on big button
buttonBookindVisistBigSecondElement.addEventListener('click', () => {
  console.log(buttonBookindVisistBigSecondElement);
  startSecondContainer.classList.remove('start_visible');
  symptomsSecond.classList.remove('symptoms_visible');
  popupBooking.classList.add('popup_opened');
});
//click on free booking
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
//click on pay booking
bookingPayBlock.addEventListener('click', () => {
  buttonOrderClinicSecondElements.forEach((el) => {
    el.classList.add('communitys_unvisible');
  });
  popupBooking.classList.remove('popup_opened');
  appointmentSecondSection.classList.add('appointment_visible');
  console.log(bookingPayBlock);
});
//click on booking at clinic free
buttonOrderClinicSecondElements.forEach((el) => {
  el.addEventListener('click', () => {
    console.log(el);
    popupGosuslugi.classList.add('popup_opened');
    appointmentSecondSection.classList.remove('appointment_visible');
  });
});
//click pay at clinics clinics
buttonOrderClinicThirdElements.forEach((el) => {
  el.addEventListener('click', () => {
    appointmentSecondSection.classList.remove('appointment_visible');
  });
  el.addEventListener('click', () => {
    appointmentSecondSection.classList.remove('appointment_visible');
    popupChooseDate.classList.add('popup-date-opened-2');
    popupChooseDateConfirmElement.classList.add('popup-date__confirm_hidden');
    popupChooseDateConfirmSecondElement.classList.add('community_unvisible');
    popupChooseDateConfirmThirdElement.classList.remove(
      'popup-date__confirm_hidden'
    );
  });
});
//click on choose date pay clinics
popupChooseDateConfirmThirdElement.addEventListener('click', () => {
  console.log('ewew');
  popupChooseDate.classList.remove('popup-date-opened-2');
  // popupSuccessConfirm.classList.add('communitys_unvisible');

  popupSuccessConfirm.classList.add('popup-date__confirm_hidden');
  popupGosuslugi.classList.remove('popup_opened');
  popupSuccess.classList.add('popup_opened');
  popupSuccessConfirmSecond.classList.remove('popup-date__confirm_hidden');
  linePopupSuccessElement.classList.add('communitys_unvisible');
  enterPopupSuccessElement.classList.add('communitys_unvisible');
  descriptionPopupSuccessElement.classList.add('communitys_unvisible');
  pricePopupSuccessElement.innerHTML = '1690 P';
});
//click on gosuslugi
gosuslugiEnterButton.addEventListener('click', () => {
  // popupSuccessConfirm.classList.add('communitys_unvisible');
  // popupSuccessConfirm.classList.remove('communitys_unvisible');
  // popupSuccessConfirm.classList.add('community_unvisible');
  popupSuccessConfirm.classList.add('popup-date__confirm_hidden');
  popupSuccess.classList.add('popup-success_visible');
  popupGosuslugi.classList.remove('popup_opened');
  popupSuccess.classList.remove('popup_closed');
  popupSuccessConfirmSecond.classList.remove('popup-date__confirm_hidden');
  linePopupSuccessElement.classList.add('communitys_unvisible');
  enterPopupSuccessElement.classList.add('communitys_unvisible');
  descriptionPopupSuccessElement.classList.add('communitys_unvisible');
  pricePopupSuccessElement.innerHTML = 'Бесплатно';
  console.log('dsds');
  console.log(popupSuccess);
});
//ssssss
popupSuccessConfirmSecond.addEventListener('click', () => {
  console.log('ddddd');
  console.log(popupSuccessConfirm);
  popupSuccess.classList.remove('popup_opened');
  timelineFirst.classList.add('timeline_hidden');
  timelineSecond.classList.remove('timeline_hidden');
  header.classList.remove('list_unvisible');
  footer.classList.remove('footer_hidden');
  communitysSection.classList.remove('communitys_unvisible');
  popupSuccess.classList.remove('popup-success_visible');
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
