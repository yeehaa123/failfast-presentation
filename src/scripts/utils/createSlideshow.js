import R from 'ramda';

function createSlideshow(data){
  let cover = createCover(data);
  let backCover = createBackCover(data);
  let program = createProgram(data.slides);
  let temp = R.concat([cover, program], data.slides);
  let slideShow = R.concat(temp, [backCover]);
  data.slides = createSlides(slideShow);
  return data;
}

function createCover(data){
  let { title, presenter, event } = data;
  let type = 'main-title';
  return { title, type, presenter, event };
}

function createBackCover(data){
  let { url, presenter } = data;
  let title = url;
  let type = 'credits';
  return { url, type, presenter };
}


function createProgram(slides){
  let getSectionSlides = R.filter(({ type }) => type === 'section-title');
  let sectionSlides = getSectionSlides(slides);
  let content = R.pluck('title')(sectionSlides);
  let type = 'program';
  return { type, content };
}

function createSlides(slides){
  let sectionIndex = 0;
  let sectionTitle = undefined;
  let slideFactory = R.mapIndexed((item, index) => {

    if(item.type === 'section-title'){
      sectionIndex += 1;
      sectionTitle = item.title;
    }

    item.sectionIndex = sectionIndex;
    item.sectionTitle = sectionTitle;
    item.index = index + 1;

    return item;
  });
  return slideFactory(slides);
}

export default createSlideshow;
