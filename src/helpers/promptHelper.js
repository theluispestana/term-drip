// creates and returns proper prompt for code preview
export const parsePromptItems = (promptItems) => {
  let prompt = "";
  promptItems.forEach((item) => {
    if (item.type === "username") {
      prompt += "%n ";
    } else if (item.type === "date") {
      prompt += "%W ";
    } else if (item.type === "time") {
      prompt += "%t ";
    }
  });

  return `PROMPT="${prompt}"`;
};

// creates and returns a preview for selected prompt items
export const createPromptPreview = (promptItems) => {
  let prompt = [];
  promptItems.forEach((item) => {
    if (item.type === "username") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "Username ",
      });
    } else if (item.type === "date") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "06/30/20 ",
      });
    } else if (item.type === "time") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "06:20PM",
      });
    }
  });
  return prompt;
};

export const addOrRemovePromptItems = (itemArr, item) => {
  if (itemArr.some((i) => i.type === item)) {
    return itemArr.filter((i) => i.type !== item);
  } else {
    itemArr.push({ type: item });
    return itemArr;
  }
};
