// creates and returns proper prompt for code preview
export const parsePromptItems = (promptItems) => {
  let prompt = "";
  promptItems.forEach((item) => {
    if (item.type === "username") {
      prompt += createZSHString(item, "%n");
    } else if (item.type === "hostname") {
      prompt += createZSHString(item, "%m");
    } else if (item.type === "workingDirectory") {
      prompt += createZSHString(item, "%d");
    } else if (item.type === "date") {
      prompt += createZSHString(item, "%W");
    } else if (item.type === "dayDD") {
      prompt += createZSHString(item, "%w");
    } else if (item.type === "militaryTime") {
      prompt += createZSHString(item, "%T");
    } else if (item.type === "time") {
      prompt += createZSHString(item, "%t");
    }
  });

  return `PROMPT="${prompt}"`;
};

const createZSHString = (item, code) => {
  let zshString = `${code}`;
  if (item.foreground) zshString = `%F{${item.foreground}}${zshString}%f`;
  if (item.background) zshString = `%K{${item.background}}${zshString}%k`;
  return `${zshString} `;
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
    } else if (item.type === "hostname") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "host ",
      });
    } else if (item.type === "workingDirectory") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "/Users/Name/Documents ",
      });
    } else if (item.type === "date") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "06/30/20 ",
      });
    } else if (item.type === "dayDD") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "Fri 13 ",
      });
    } else if (item.type === "militaryTime") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "20:39 ",
      });
    } else if (item.type === "time") {
      prompt.push({
        style: { color: item.foreground, backgroundColor: item.background },
        text: "06:20PM ",
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

export const createPromptItemArr = (items) => {
  const promptArr = [];

  items.forEach((item) => {
    const background = item.colors.find(
      (color) => color.color_type === "background"
    );
    const foreground = item.colors.find(
      (color) => color.color_type === "foreground"
    );
    promptArr.push({
      type: item.type,
      background: background ? background.color : null,
      foreground: foreground ? foreground.color : null,
    });
  });
  return promptArr;
};

export const setCheckboxes = (items) => {
  const checkboxObj = {};
  items.forEach((item) => (checkboxObj[item.type] = true));
  return checkboxObj;
};

export const addPromptColors = (colorInput, promptItems) => {
  const [type, colorType] = colorInput.name.split(" ");
  const index = promptItems.findIndex((item) => item.type === type);
  promptItems[index] = {
    ...promptItems[index],
    [colorType]: colorInput.value,
  };

  return promptItems;
};
