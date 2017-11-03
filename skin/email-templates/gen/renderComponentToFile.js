import Rx from "rxjs/Rx";
import { writeFile } from "fs";
import mkdirp from "mkdirp";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import juice from "juice";
import declassify from "declassify";

const renderComponentToFile = (subject, htmlComp, text, dir) => {
  return Rx.Observable.create(observer => {
    const sheet = new ServerStyleSheet();
    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>{htmlComp}</StyleSheetManager>
    );

    const styleTags = sheet.getStyleTags();

    const htmlOut = declassify.process(
      juice(`<!doctype html>${html.replace("/* style-tags */", styleTags)}`)
    );

    mkdirp(dir, {}, err1 => {
      if (err1) {
        observer.error(err1);
      }
      writeFile(`${dir}/subject.txt`, subject, err2 => {
        if (err2) {
          observer.error(err2);
        }
        observer.next();
      });
      writeFile(`${dir}/html.html`, htmlOut, err2 => {
        if (err2) {
          observer.error(err2);
        }
        observer.next();
      });
      writeFile(`${dir}/text.txt`, text, err2 => {
        if (err2) {
          observer.error(err2);
        }
        observer.next();
      });
    });
  });
};

export default renderComponentToFile;
