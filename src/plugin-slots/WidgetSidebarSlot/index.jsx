import React from 'react';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LookingForChallengeWidget from 'widgets/LookingForChallengeWidget';

export const WidgetSidebarSlot = () => (
  <>
    {/* Блок Telegram */}
    <div style={{
      padding: '18px 22px',
      marginBottom: '18px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #e8f3ff 0%, #ffffff 100%)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      border: '1px solid #dceaff',
      transition: '0.2s ease',
    }}>
      <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '17px',
        fontWeight: 600,
        color: '#0a3d7c'
      }}>
        Теперь мы в Telegram
      </h3>

      <a
        href="https://t.me/kaznuopen"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: '15px',
          fontWeight: 500,
          color: '#0077ff',
          textDecoration: 'none',
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
