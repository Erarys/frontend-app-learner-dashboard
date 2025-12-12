import React from 'react';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LookingForChallengeWidget from 'widgets/LookingForChallengeWidget';

export const WidgetSidebarSlot = () => (
  <>
    <div style={{ padding: '8px', color: 'red' }}>
      Привет, мир! (test)
    </div>

    <PluginSlot
      id="org.openedx.frontend.learner_dashboard.widget_sidebar.v1"
      idAliases={['widget_sidebar_slot']}
    >
      <LookingForChallengeWidget />
    </PluginSlot>
  </>
);

export default WidgetSidebarSlot;
