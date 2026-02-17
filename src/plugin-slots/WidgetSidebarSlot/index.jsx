import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LookingForChallengeWidget from 'widgets/LookingForChallengeWidget';

export const WidgetSidebarSlot = () => (
  <PluginSlot id="org.openedx.frontend.learner_dashboard.widget_sidebar.v1">
    <div
      style={{
        display: 'flex',
        gap: '15px',       // расстояние между виджетами
        alignItems: 'flex-start',
      }}
    >
      {/* Старый виджет */}
      <div style={{ flex: 1 }}>
        <LookingForChallengeWidget />
      </div>
       {/* Новый виджет Telegram */}
      <div style={{ flex: 1, textAlign: 'center' }} data-testid="telegram-widget">
        <a
          href="https://t.me/kaznuopen"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            backgroundColor: '#0088cc',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: 'bold',
            display: 'inline-block',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#00aaff')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#0088cc')}
        >
          Присоединиться к группе
        </a>
      </div>
    </div>
  </PluginSlot>
);
export default WidgetSidebarSlot;