
const ChangedAttribute = document.getElementById("TheAttributeNeededToBeChangedForTheSakeOfThisLabAssignment");
ChangedAttribute.setAttribute("style", "color:green")

const h1 = document.createElement("h1");
h1.innerHTML = "Lab7 Assignment";
h1.style.color = "blue";
document.body.append(h1);

const line1 = document.createElement("hr");
document.body.append(line1);

const h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.append(h2);

const p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.append(p1);

const ul1 = document.createElement("li");
ul1.innerHTML = "find elements in the DOM (<b>5 points</b>); -- Sure! I used getElementById to find my elements";
ul1.style.color = "green";
document.body.append(ul1);

const ul2 = document.createElement("li");
ul2.innerHTML = "create/add/remove elements (<b>5 points</b>); -- Sure! I added the element img below. Enjoy the meme!";
ul2.style.color = "purple";
document.body.append(ul2);

const img = document.createElement("img");
img.src = "img.png";
document.body.append(img);

const ul3 = document.createElement("li");
ul3.innerHTML = "change content of the elements (<b>5 points</b>); -- Sure! The content is changed in here! I just added <q>Sure! The content is changed in here!</q>";
ul3.style.color = "green";
document.body.append(ul3);

const ul4 = document.createElement("li");
ul4.innerHTML = "change styles of the elements (<b>5 points</b>); -- Sure! Now this one is in red!";
ul4.style.color = "red";
document.body.append(ul4);

const ul5 = document.createElement("li");
ul5.innerHTML = "change attributes of the elements (<b>5 points</b>); Sure! I added color to the header <q>Hello WORLD!</q>";
ul5.style.color = "green";
document.body.append(ul5);

const ul6 = document.createElement("li");
ul6.innerHTML = "change classes of the elements (<b>5 points</b>). -- Sure! I added class to the header of HTML <q>Hello WORLD!</q>";
ul6.style.color = "purple";
document.body.append(ul6);

document.getElementById("TheAttributeNeededToBeChangedForTheSakeOfThisLabAssignment").className = "Added class";

const line2 = document.createElement("hr");
document.body.append(line2);

const h3 = document.createElement("h2");
h3.innerHTML = "Submission";
h3.style.color = "red";
document.body.append(h3);

const p2 = document.createElement("p");
p2.innerHTML = "To submit your work, follow these instructions:";
document.body.append(p2);

const ul7 = document.createElement("li");
ul7.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
ul7.style.color = "green";
document.body.append(ul7);

const ul8 = document.createElement("li");
ul8.innerHTML = "Clone this repository to your local machine and work inside it.";
ul8.style.color = "purple";
document.body.append(ul8);

const ul9 = document.createElement("li");
ul9.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with <q>Hello, World!</q> message (<b>1 point</b>).";
ul9.style.color = "green";
document.body.append(ul9);

const ul10 = document.createElement("li");
ul10.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
ul10.style.color = "purple";
document.body.append(ul10);

const ul11 = document.createElement("li");
ul11.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
ul11.style.color = "green";
document.body.append(ul11);

const ul12 = document.createElement("li");
ul12.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
ul12.style.color = "purple";
document.body.append(ul12);

const ul13 = document.createElement("li");
ul13.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
ul13.style.color = "green";
document.body.append(ul13);

const line3 = document.createElement("hr");
document.body.append(line3);
