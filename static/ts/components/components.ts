const createElement = (domString: any) => {
  const tmep = document.createElement("template");
  tmep.innerHTML = domString;
  return tmep.content;
};

const fetchData = async (url: any) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const Planet = async () => {
  const { content } = await fetchData("/Planet");
  return createElement(`<h1>${content}}</h1>`);
};

export const NotFound = () => {
  createElement(`<h1>404 NotFound</h1>`);
};
