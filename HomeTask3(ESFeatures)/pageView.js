import {
    postControl
} from "./pageController.js";

import {
    constants
} from "./data.js";

export class viewPage {
    renderPage = () => {
        let objConst = new constants();
        //Adding Header Panel    
        this.addHeader(objConst);
        //Adding body Part
        this.addMain(objConst);
        //Adding Footer Panel
        this.addFooter(objConst);
        // //Setting data to the elements
        // setData(data);
        let obj = new postControl();
        obj.onLoadPage();

    }
    //Header
    addHeader = (obj) => {
        
        this.createHTMLElement(obj.headerElements);
    }

    addFooter = (obj) => {
        this.createHTMLElement(obj.footerElements);
    }



    //Body
    addMain = (obj) => {
        this.createHTMLElement(obj.mainElements);

        //creation of side panel for adding select category and subscription
        this.addSidePanel(obj);
    }

    //sidePanel 
    addSidePanel = (obj) => {

        //Attributes for input tag
        let thisElement = document.getElementById("emailIdTextBox");
        thisElement.placeHoler = "EmailAddress";
        thisElement.type = "text";

        //Attributes for button for submision of mail
        thisElement = document.getElementById("emailIdSubmitBtn");
        thisElement.value = "Subscribe";
        thisElement.type = "submit";

        //Creating and appending option tag for displaying categories
        for (var allCategories = 0; allCategories < obj.categories.length; allCategories++) {
            // Create an Option        
            var opt = document.createElement("option");
            // Add an Option object to List Box
            document.getElementById("categoryLstBox").options.add(opt);
            opt.text = obj.categories[allCategories].toUpperCase();
            opt.value = allCategories;
        }
    }


    //Create Function to create respective element
    createHTMLElement = (elements) => {
        elements.forEach(function (eachElement) {
            let div = document.createElement(eachElement.element);
            if (eachElement.class) {
                div.className = eachElement.class;
            }
            if (eachElement.id) {
                div.id = eachElement.id;
            }
            if (eachElement.text) {
                div.innerHTML = eachElement.text;
            }
            if (eachElement.event) {
                let funct = eachElement.eventFunction;
                div.addEventListener(eachElement.event, funct);
            }
            document.getElementById(eachElement.parent).appendChild(div);
        });
    }
    //Setting data and cloning for more posts
    setData = (dataToSet) => {
    for (let entries = 0; entries < dataToSet.length; entries++) {
        this.createPost(entries + 1, dataToSet[entries]);
    }
}

//Post Creation
 createPost = (postNumber, dataArray) => {

    //Footer Elements
let postElements = [
    {
        id: `post${postNumber}`,
        element: "div",
        class: "flxRow allPosts",
        parent: "content",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: `postDivisionLine1${postNumber}`,
        element: "hr",
        class: "divideLine",
        parent: "content",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: `postImageId${postNumber}`,
        element: "img",
        class: "postImage",
        parent: `post${postNumber}`,
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: `postContent${postNumber}`,
        element: "div",
        class: "marginForPost",
        parent: `post${postNumber}`,
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: `postTitleId${postNumber}`,
        element: "h2",
        class: "marginForPost",
        parent: `postContent${postNumber}`,
        text: dataArray.postTitle,
        event: "",
        eventFunction: ""
    },
    {
        id: `postTitleDescId${postNumber}`,
        element: "h6",
        class: "spacingWithInPosts",
        parent: `postContent${postNumber}`,
        text: `<span class=fontLight>Posted on </span>"  ${dataArray.postDate}  "<span class=fontLight>// Category :</span> "  ${dataArray.postCategory} "`,
        event: "",
        eventFunction: ""
    },
    {
        id: `postDescId${postNumber}`,
        element: "p",
        class: "spacingWithInPosts",
        parent: `postContent${postNumber}`,
        text: dataArray.postDesc,
        event: "",
        eventFunction: ""
    },
    {
        id: `postContinueBtnId${postNumber}`,
        element: "button",
        class: "postButton spacingWithInPosts",
        parent: `postContent${postNumber}`,
        text: "Continue Reading",
        event: "click",
        eventFunction: continueReading
    },
];
this.createHTMLElement(postElements);


   
     document.getElementById("postTitleDescId" + postNumber).value = dataArray.postCategory;

    document.getElementById("postImageId" + postNumber).src = dataArray.imageSrc;
 
    
}

}



//Continue Reading event
function continueReading ()  {
    //displaying popup
    document.getElementById("popUp").style.display = "block";
    //getting related text to display
    var btnId = this.id;
    var postId = btnId.substr(17);
    var title = document.getElementById("postTitleId" + postId).textContent;
    var titleDesc = document.getElementById("postTitleDescId" + postId).textContent;
    var desc = document.getElementById("postDescId" + postId).textContent;

    //Creating and displaying text
    var content = title + "<br><br>" + titleDesc + "<br><br>" + desc + "<br>";
    document.getElementById("contentDisplayArea").innerHTML = content;
}