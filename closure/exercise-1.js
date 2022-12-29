const stringBuilder = () => {
  let result = "";
  console.log("this is a test");

  const add = (characters) => {
    console.log("test 2");
    return result += characters;
  };

  return add;
};

const builder = stringBuilder();
let text = builder("Hello ");
text = builder("there ");
text = builder("friend!");
console.log(text);

const builder2 = stringBuilder();
let another = builder2("only only!");
console.log(another);

const builder3 = stringBuilder;
const builder4 = builder3();
builder4("yeahyeahyeah");
