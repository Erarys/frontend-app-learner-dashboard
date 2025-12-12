import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    'org.openedx.frontend.learner_dashboard.widget_sidebar.v1': {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_sidebar_panel',
            type: DIRECT_PLUGIN,
            priority: 60,
            RenderWidget: () => (
              <div>
                <h3>Sidebar Menu</h3>
                <p>sidebar item #1</p>
                <p>sidebar item #2</p>
                <p>sidebar item #3</p>
              </div>
            ),
          },
        },
      ],
    },
  },
};

export default config;
