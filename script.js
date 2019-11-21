    let list = document.getElementsByTagName("ul")[0];
    let newItemLast = document.createElement("li"); //<li></li>
    let newTextLast = document.createTextNode("cream"); //cream

    newTextLast.appendChild(newTextLast); //<li>cream</li>
    list.appendChild(newItemLast);
    /*
    <ul>
            <li id="one"><i>fresh</i> figs</li>
            <li id="two">pine nuts</li>
            <li id="three">honey</li>
            <li id="four">balsamic vinegar</li>
            //<li>cream</li>
        </ul>
     */

    let newitemfirst = document.createElement("li"); //<li></li>
    let newtextfirst = document.createTextNode("kale");
    newitemfirst.appendChild(newtextfirst); //<li>kale</li>
    list.insertBefore(newitemfirst, list.firstChild);
    /*
   <ul>
           <li>kale</li>
           <li id="one"><i>fresh</i> figs</li>
           <li id="two">pine nuts</li>
           <li id="three">honey</li>
           <li id="four">balsamic vinegar</li>
           //<li>cream</li>
       </ul>
    */

    let listitems = document.getElementsByTagName("li");
    let i;

    for (i=0;i<listitems.length; i++){
        listitems[i].className = "cool";
    }

    let heading = document.getElementsByTagName("h2")[0];
    let headingText = heading.textContent;
    let totalItems = listitems.length;
    let newheading = headingText + '<span>' + totalItems + '</span>';

    heading.innerHTML = newheading;