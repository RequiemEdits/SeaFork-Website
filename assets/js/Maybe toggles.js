 
function toggleSkills() { 
    if (this.parentNode.className === 'skills__content skills__open'){
         this.parentNode.className = 'skills__content skills__close' return false; } 
         for (i = 0; i < skillsContent.length; i++) { 
            skillsContent[i].className = 'skills__content skills__close' 
        } 
        if (this.parentNode.className === 'skills__content skills__close') { 
            this.parentNode.className = 'skills__content skills__open' 
        } } 
skillsHeader.forEach((el) => { el.addEventListener('click', toggleSkills) })