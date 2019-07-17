import {
    dataFetch
} from "./postModel.js";

import {
    viewPage
} from "./pageView.js";

import {
    constants
} from "./data.js";

export class postControl {
    category = "cnn";
    

    init = () => {
        let obj = new viewPage();
        obj.renderPage();

    }

    onLoadPage = () => {
        let obj = new dataFetch(this.category);
        obj.fetchData();

    }

    setPostData = (sourceOfPost, data) => {
        let postData = [];
        //urlToImage,title,publishedAt,description,{postCategory:this.source}
        data.forEach(function (eachPost) {
            postData.push({
                imageSrc: eachPost.urlToImage,
                postTitle: eachPost.title,
                postDate: eachPost.publishedAt,
                postCategory: sourceOfPost,
                postDesc: eachPost.description
            })
        });
        let obj = new viewPage();
        obj.setData(postData);

    }

    sourceSelectionEvent = (sourceOfPost, data) => {
        let objConst = new constants();   
    //Getting value selected by user
    let listBox = document.getElementById("categoryLstBox");
    let selectedValue = listBox.value;

    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    let selectedcategory = objConst.categories[selectedValue];
    let obj = new dataFetch(selectedcategory);
    obj.fetchData();
    
    }
}


const app = new postControl();

window.addEventListener('load', () => app.init());