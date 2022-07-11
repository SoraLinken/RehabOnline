/* --- js ---*/
const exerciseNumber = document.getElementById("ex-number");
const dropboxesDiv = document.getElementById("dropboxes")
const dropbox = `
                <div class="col">
                    <div class="form-outline">
                        <label class="visually-hidden" for="inlineFormSelectPref">Excercise</label>
                        <select class="select">
                            <option value="1">Reverse Lunges</option>
                            <option value="2">Skater Jumps</option>
                            <option value="3">Jumping Jacks</option>
                            <option value="4">One Legged Stand</option>
                            <option value="5">Push Ups</option>
                            <option value="6">Squats</option>
                            <option value="7">Situps</option>
                            <option value="8">Pull Ups</option>
                        </select>
                    </div>
                </div>
                `
exerciseNumber.addEventListener('change', function(){

    let exercisesToAdd = parseInt(exerciseNumber.value);
        
    var child = dropboxesDiv.lastElementChild; 
    while (child) {
        dropboxesDiv.removeChild(child);
        child = dropboxesDiv.lastElementChild;
    }

    for (let index = 0; index < exercisesToAdd; index++) {
        dropboxesDiv.innerHTML+= dropbox;
        // add id to each new div in order to sent the value in php
    }

});


