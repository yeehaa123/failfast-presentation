import R from 'ramda';

function createSlideshow(data){
  let cover = createCover(data);
  let slideShow = R.concat([cover], data.slides);
  data.slides = createSlides(slideShow);
  return data;
}

function createCover(data){
  let { title, presenter, event } = data;
  let type = 'main-title';
  return { title, type, presenter, event };
}


function createSlides(slides){
  let sectionIndex = 0;
  let sectionTitle = undefined;
  let slideFactory = R.mapIndexed((item, index) => {
    console.log(item);

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
