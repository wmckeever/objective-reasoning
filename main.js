// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//<=================== isAdmin Problem ===================>//
// create a set of objects for the users
let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER' 
}
let user2 = {
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
}
let user3 = {
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
}
let users = []; // create an empty array to house the users
users.push(user1, user2, user3); // .push the users to the empty array

// create a for loop that will go through the list of users continually
for(let i = 0; i < users.length; i++){
    console.log(isAdmin(users[i]));}

// create a function that tells sees if the user is an admin or not
function isAdmin(user){
    if(user.userRole !== "ADMIN"){
    return false;
}else {
    return true;
}
}

//<=================== getEmail Problem ===================>//
    // let studentEmail = {
    //             firstName: "Brian",
    //             lastName: "Carela",
    //             combineName: function() {
    //                 this.firstName.toLocaleLowerCase() + this.lastName.toLocaleLowerCase() + "@codeimmersives.com"
    //             }
    //         }  
    let student1 = {
        firstName: "Brian",
        lastName: "Carela",
    }  
function getEmail(studentEmail){
 studentEmail = studentEmail.firstName + "." + studentEmail.lastName + "@codeimmersives.com" 
return studentEmail.toLowerCase();
}


//<=================== getPlayListLength Problem ===================>//  

// create three song objects
let music1 = {
    name: 'playlist1',
    songs: ['song1', 'song2', 'song3', 'song4']
  }
  
  
  function getPlaylistLength(playlist){
  let newPlaylist = playlist.songs.length;
  return newPlaylist;
  }
  getPlaylistLength(music1)
  console.log(music1.songs.length);
  
// //<=================== getHardestHomework Problem ===================>//  

// /* Write a function, getHardestHomework that takes in an array of homework objects and returns the name of the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.
// */

function getHardestHomework(scores){
    lowestHomework = scores[0];   
   if (scores.length === 0) {
    return "";
   }
    for(let i = 0; i < scores.length; i++){
        if(scores[i].averageScore < lowestHomework.averageScore){
            lowestHomework = scores[i];
        }
   }
  return lowestHomework.name;
 }
getHardestHomework([20, 30, 50, 80, 100]);


//<=================== createPhonebook Problem ===================>//  

/* Write a function, createPhonebook, that creates a phonebook object from an array of names and phone numbers.
*/



function createPhonebook(pName, pNumber){
    let both = {};

    for(let i = 0; i < pName.length; i++){
        both[pName[i]] = pNumber[i];        
    }
    return both;
}
createPhonebook([],[]);









// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};