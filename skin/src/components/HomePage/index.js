import React from "react";

import Panel from "dashboard/components/panel";
import PanelGroup from "dashboard/components/panel_group";
import Features from "./Features";

export const panels = [
  () => (
    <Panel title="Cheatsheet">
      {[Features].map((C, i) => {
        if (i % 2 === 0) {
          return (
            <div key={i}>
              <PanelGroup columns={6}>
                <C />
              </PanelGroup>
            </div>
          );
        }
        return (
          <PanelGroup columns={6} key={i}>
            <C />
          </PanelGroup>
        );
      })}
    </Panel>
  )
];
