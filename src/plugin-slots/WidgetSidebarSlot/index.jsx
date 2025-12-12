import React from 'react';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LookingForChallengeWidget from 'widgets/LookingForChallengeWidget';

export const WidgetSidebarSlot = () => (
  <>
    <div style={{ padding: '8px 0', color: 'red' }}>
      Привет, мир! (test)
    </div>

    {/* Блок Telegram */}
    <div style={{
      padding: '16px 20px',
      marginBottom: '16px',
      borderRadius: '8px',
      background: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      border: '1px solid #eee'
    }}>
      <h3 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 600 }}>
        Теперь мы в Telegram
      </h3>

      <a
        href="https://t.me/kaznuopen"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: '14px',
          fontWeight: 500,
          color: '#0a7cff',
          textDecoration: 'none'
        }}
      >
        Перейти в группу →
      </a>
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
