import React from 'react';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PluginSlot } from '@openedx/frontend-plugin-framework';

import './index.scss';

export const WidgetSidebarSlot = () => (
  <PluginSlot id="org.openedx.frontend.learner_dashboard.widget_sidebar.v1">
    <section
      className="open-kaznu-telegram"
      aria-labelledby="open-kaznu-telegram-title"
      lang="ru"
    >
      <div className="open-kaznu-telegram__brand" dir="ltr">
        <span className="open-kaznu-telegram__icon" aria-hidden="true">
          <FontAwesomeIcon icon={faTelegramPlane} />
        </span>
        <span>@kaznuopen</span>
      </div>
      <h2 id="open-kaznu-telegram-title">Open KazNU в Telegram</h2>
      <p>Анонсы новых курсов, новости платформы и возможности для студентов.</p>
      <a
        className="open-kaznu-telegram__link"
        href="https://t.me/kaznuopen"
        target="_blank"
        rel="noopener noreferrer"
      >
        Присоединиться к каналу
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  </PluginSlot>
);

export default WidgetSidebarSlot;
