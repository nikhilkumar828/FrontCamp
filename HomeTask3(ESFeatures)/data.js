// import {
//     postControl
// } from "./pageController.js";


//Data for content
var data = [
    {
        imageSrc: "https://dbjk47w5ep2rm.cloudfront.net/blog/wp-content/uploads/2015/03/Screen-Shot-2015-03-19-at-12.16.37-PM.png",
        postTitle: "Delhi CEO writes to EC over Modi web series",
        postDate: "29th June , 2019",
        postCategory: "BCC",
        postDesc: "Delhi Chief Electoral Officer Ranbir Singh has written to the poll panel saying that a web series on Modi available on the Eros Now website was streaming without certification from the Media Certification and Monitoring Committee (MCMC).A senior official at the Delhi CEO's office reportedly said that they have brought to the notice of the ECI that a series on PM Narendra Modi is being screened on the Eros Now platform without MCMC certification. Since it not a Delhi specific matter, the CEO office has asked the ECI to take cognizance of the matter."
    }
];

//Various Categories
var categories = ["cnn", "cbc-news", "bbc-sport", "cnbc", "fortune", "google-news", "metro", "mirror", "talksport", "time", "the-hindu"];

//Header elements
var headerElements = [
    {
        id: "titleContainer",
        element: "div",
        class: "titleMain",
        parent: "headerTitle",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h2",
        class: "titleHeading",
        parent: "titleContainer",
        text: "NEWSFEED",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h6",
        class: "titleDesc",
        parent: "titleContainer",
        text: "<i>Yet another newsfeed</i>",
        event: "",
        eventFunction: ""
    }
];


//Footer Elements
var footerElements = [
    {
        id: "",
        element: "div",
        class: "",
        parent: "wrapper",
        text: "<br>",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "div",
        class: "marginForFooterContent",
        parent: "footerTitle",
        text: "&copy; NewsFeed 2019",
        event: "",
        eventFunction: ""
    }
];

//popup close event
function popUpCloseBtn() {
    document.getElementById("popUp").style.display = "none";
}

   //Events 

//List Box Selection Event
function listBoxSelection ()  {

    let obj = new postControl();
    obj.sourceSelectionEvent();

    
    //setData(selectedData);
}

//Email submit event
function submitEmail  ()  {
    var arrayOfMailId = [];
    //getting the mailId entered
    let mailId = document.getElementById("emailIdTextBox").value;
    //Regular Expression for email Id
    var re = /\S+@\S+\.\S+/;
    //If mailId is valid then store else show alert
    if (re.test(mailId)) {
        var ids = localStorage.getItem("mailId");
        if (ids) {
            arrayOfMailId = ids.split(',');
        }
        //Storing mailId to localStorage
        arrayOfMailId.push(mailId);
        localStorage.setItem('mailId', arrayOfMailId);
        document.getElementById("emailIdTextBox").value = "";
    }
    else {
        alert("Enter Valid Email address");
    }
}

//Main Elements
var mainElements = [
    {
        id: "mainContainer",
        element: "div",
        class: "flxRow",
        parent: "wrapper",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "popUp",
        element: "div",
        class: "modal",
        parent: "wrapper",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "popUpContent",
        element: "div",
        class: "modal-content",
        parent: "popUp",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "closeBtn",
        element: "span",
        class: "close",
        parent: "popUpContent",
        text: "&times;",
        event: "click",
        eventFunction: popUpCloseBtn
    },
    {
        id: "contentDisplayArea",
        element: "p",
        class: "",
        parent: "popUpContent",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "content",
        element: "div",
        class: "flxColumn allPosts",
        parent: "mainContainer",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "sidePanel",
        element: "div",
        class: "sidePanelStyle",
        parent: "mainContainer",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h3",
        class: "",
        parent: "sidePanel",
        text: "Select Category",
        event: "",
        eventFunction: ""
    },
    {
        id: "categoryLstBox",
        element: "select",
        class: "lstBox",
        parent: "sidePanel",
        text: "",
        event: "change",
        eventFunction: listBoxSelection
    },
    {
        id: "",
        element: "div",
        class: "",
        parent: "sidePanel",
        text: "<br><br>",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h3",
        class: "",
        parent: "sidePanel",
        text: "Subscribe<br><br>",
        event: "",
        eventFunction: ""
    },
    {
        id: "emailIdAction",
        element: "form",
        class: "",
        parent: "sidePanel",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h5",
        class: "",
        parent: "sidePanel",
        text: "Email Id:<br>",
        event: "",
        eventFunction: ""
    },
    {
        id: "emailIdTextBox",
        element: "input",
        class: "txtBoxMeasures",
        parent: "sidePanel",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "emailIdSubmitBtn",
        element: "input",
        class: "btnSubscribe",
        parent: "sidePanel",
        text: "",
        event: "click",
        eventFunction: submitEmail
    },
];



