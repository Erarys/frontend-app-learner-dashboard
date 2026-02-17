import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LookingForChallengeWidget from 'widgets/LookingForChallengeWidget';

const styles = {
  container: {
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },

  widget: {
    flex: 1,
  },

  telegramWrapper: {
    flex: 1,
    textAlign: 'center',
  },

  telegramButton: {
    textDecoration: 'none',
    color: '#ffffff',
    backgroundColor: '#0088cc',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
};

export const WidgetSidebarSlot = () => (
  <PluginSlot id="org.openedx.frontend.learner_dashboard.widget_sidebar.v1">
    <div style={styles.container}>

      {/* Виджет с заданиями */}
      <div style={styles.widget}>
        <LookingForChallengeWidget />
      </div>

      {/* Telegram блок */}
      <div
        style={styles.telegramWrapper}
        data-testid="telegram-widget"
      >
        <a
          href="https://t.me/kaznuopen"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.telegramButton}
          className="telegram-btn"
        >
          Присоединиться к группе
        </a>
      </div>

    </div>
  </PluginSlot>
);

export default WidgetSidebarSlot;
