// src/components/WidgetSidebarSlot.jsx
import React from "react";
import { PluginSlot } from "@openedx/frontend-plugin-framework";
import LookingForChallengeWidget from "plugins/LookingForChallengeWidget";

export const WidgetSidebarSlot = () => (
  <PluginSlot id="org.openedx.frontend.learner_dashboard.widget_sidebar.v1">
    <LookingForChallengeWidget />
    {/* Новый виджет со ссылкой */}
    <div className="custom-sidebar-widget">
      <a
        href="https://t.me/kaznuopen"
        target="_blank"
        rel="noopener noreferrer"
      >
        Легером группы
      </a>
    </div>
  </PluginSlot>
);

export default WidgetSidebarSlot;
