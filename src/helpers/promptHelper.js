import React from "react";

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
  promptItems.forEach((item, index) => {
    if (item.type === "username") {
      prompt.push(<span key={index}>Username </span>);
    } else if (item.type === "date") {
      prompt.push(<span key={index}>06/30/20 </span>);
    } else if (item.type === "time") {
      prompt.push(<span key={index}>06:20PM </span>);
    }
  });
  return prompt;
};

export const addOrRemovePromptItems = (itemArr, item) => {
  if (itemArr.some((item) => item.type === item)) {
    return itemArr.filter((i) => i.type === item);
  } else {
    itemArr.push({ type: item });
    return itemArr;
  }
};
