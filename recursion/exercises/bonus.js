const document = {
  childNodes: [
    {
      nodeName: "html",
      childNodes: [
        {
          nodeName: "head",
          childNodes: [
            {
              nodeName: "script",
              innerText: "console.log('hi');",
            },
          ],
        },
        {
          nodeName: "body",
          childNodes: [
            {
              nodeName: "ul",
              childNodes: [
                {
                  nodeName: "li",
                  childNodes: [
                    {
                      nodeName: "b",
                      innerText: "Home",
                    },
                  ],
                },
                {
                  nodeName: "li",
                  innerText: "Blog",
                },
                {
                  nodeName: "li",
                  innerText: "About",
                },
              ],
            },
            {
              nodeName: "div",
              childNodes: [
                {
                  nodeName: "h1",
                  innerText: "My Blog",
                },
                {
                  nodeName: "p",
                  innerText: "Welcome to my blog!",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const constructDom = (object => {
  let result = "";
  let currentElementType = "";
  for (const [key, value] of Object.entries(object)) {
    if (key === "childNodes")
      for (const subObject of value)
        result += constructDom(subObject);
    else if (key === "nodeName") {
      currentElementType = value;
      result += `<${currentElementType}>`;
    }
    else if (key === "innerText")
      result += value;
    else
      console.error("!!Unknown key!!");
  }

  if (currentElementType)
    result += `</${currentElementType}>`;

  return result;
});

const soln = (node => {
  if (childNode.innerText)
    return childNode.innerText;

  let html = "";
  for (const childNode of node.childNodes) {
    html += `<${childNode.nodeName}>`;

    html += soln(childNode);

    html += `</${childNode.nodeName}>`;
  }
  return html;
});

console.log(constructDom(document) === soln(document));
console.log(soln(document));