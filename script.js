const nameLine = document.querySelector('.typewriter');
const descLine = document.querySelector('.typewriter2');
const nameCursor = document.querySelector('.cursor');
const bioCursor = document.querySelector('.bio');

const content = `
    <span class="col-md-6 text-center">
        <h5>Skills:</h5>
        <p class="m-0 p-0">Adobe Photoshop</p>
        <p class="m-0 p-0">Microsoft Office</p>
        <p class="m-0 p-0">Fluent in English & Korean</p>
        </span>
    <span class="col-md-6 text-center">
        <h5>Languages:</h5>
        <p class="m-0 p-0">HTML</p>
        <p class="m-0 p-0">CSS</p>
        <p class="m-0 p-0">Javascript</p>
    </span>
`
const name = 'eunah kim';
const description = 'I graduated from the University of Central Florida in 2015. I am aspiring to be a Software Developer and currently am honing and maturing my skills to be an efficient Full Stack Web Developer. My hobbies include, photography, graphic design, and traveling.'

const typingDelay = 50;
let nameIndex = 0;
let descIndex = 0;

typeName = () => {
    if(nameIndex < name.length) {
        if (!nameCursor.classList.contains('typing')) nameCursor.classList.add('typing');
        nameLine.textContent += name.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, typingDelay + 170);
    }  else {
        nameCursor.classList.remove('typing');
        setTimeout(function() {
            nameCursor.classList.remove('cursor');
            bioCursor.classList.add('cursorMini');
            const city = `
                <i class="fas fa-map-marker-alt fa-2x float-left ml-2"></i><h3>orlando, fl</h3>
            `
            $('#locationLine').append(city);
        }, 4500);
        setTimeout(function() {
            typeDesc();
        }, 6500);
    }
}

typeDesc = () => {
    if(descIndex < description.length) {
        if (!bioCursor.classList.contains('typing')) bioCursor.classList.add('typing');
        descLine.textContent += description.charAt(descIndex);
        descIndex++;
        setTimeout(typeDesc, typingDelay);
    }  else {
        bioCursor.classList.remove('typing');
        setTimeout(function() {
            bioCursor.classList.remove('cursorMini');
        }, typingDelay + 5000);
        setTimeout(function() {
            $('.add-content').append(content);
        }, typingDelay + 2000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeName, typingDelay + 1100);
})

