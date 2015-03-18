import R from 'ramda';

function createSlideshow(data){
  data.slides = createSlides(data.slides);
  return data;
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
