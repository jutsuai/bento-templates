const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();

const templateVersion = prompt("Enter the template version: ");

const directoryPath = path.join(
  `C:\\Users\\asr30\\Desktop\\bento-templates\\template-${templateVersion}\\src\\components\\prod`
);
const devDirectoryPath = path.join(
  `C:\\Users\\asr30\\Desktop\\bento-templates\\template-${templateVersion}\\src\\components\\dev`
);
const web3DirectoryPath = path.join(
  `C:\\Users\\asr30\\Desktop\\bento-templates\\template-${templateVersion}\\src\\components\\web3`
);

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files?.map(async (fileName) => {
    if (fileName === "Blank.js") {
      return;
    }
    await convertToDev(fileName);
    await convertToWeb3(fileName);
  });
});

async function convertToDev(fileName) {
  const originalFilePath = path.join(directoryPath, fileName);
  const newFilePath = path.join(devDirectoryPath, fileName);

  fs.readFile(originalFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const modifiedData = data
      .replace(/@media/g, "@container")
      .replace(/96rem/g, "75rem")
      .replace(
        'import styled from "styled-components";',
        'import styled from "styled-components";\nimport { useNode } from "@craftjs/core";'
      )
      .replace(
        /(export\s+default\s+function\s+(\w+)\s*\(\{.*?\}\)\s*\{)/g,
        "$1\n const {\n\t\tconnectors: { connect, drag },\n\t} = useNode();"
      )
      .replace(
        /(return \(\s*<(\w+)([^>]*\bid={id}[^>]*))>/g,
        `$1 ref={(ref) => connect(drag(ref))}>`
      );

    fs.mkdir(devDirectoryPath, { recursive: true }, (err) => {
      if (err) {
        console.error("Error creating the directory:", err);
        return;
      }

      fs.writeFile(newFilePath, modifiedData, (err) => {
        if (err) {
          console.error("Error writing the new file:", err);
          return;
        }
        console.log(`template-${templateVersion} dev file is written`);
      });
    });
  });
}

async function convertToWeb3(fileName) {
  const originalFilePath = path.join(directoryPath, fileName);
  const newFilePath = path.join(web3DirectoryPath, fileName);

  fs.readFile(originalFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const initModifiedData = data
      .replace('import styled from "styled-components";', "")
      .replace('import React from "react";', "")
      .replace(/export\s+default\s+function\s+(\w+)\s*\(\{.*?\}\)\s*\{/, "")
      .replace("styled.section", "styled.div")
      .replace("styled.nav", "styled.div")
      .replace("styled.footer", "styled.div")
      .replace("React.useState(", "useState(");

    const modifiedData = addAndRemoveSome(initModifiedData);

    fs.mkdir(devDirectoryPath, { recursive: true }, (err) => {
      if (err) {
        console.error("Error creating the directory:", err);
        return;
      }

      fs.writeFile(newFilePath, modifiedData, (err) => {
        if (err) {
          console.error("Error writing the new file:", err);
          return;
        }
        console.log(`template-${templateVersion} web3 file is written`);
      });
    });
  });
}

function addAndRemoveSome(code) {
  const initData =
    "const style = props.style || {};\nconst props = props.props || {};\n";
  let modifiedData = initData + code;
  const lastIndex = modifiedData.lastIndexOf("}");

  if (lastIndex !== -1) {
    return (
      modifiedData.substring(0, lastIndex) +
      modifiedData.substring(lastIndex + 1)
    );
  }

  return modifiedData;
}
