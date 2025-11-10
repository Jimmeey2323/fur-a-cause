import { useEffect } from 'react';

const ScheduleWidget = () => {
  useEffect(() => {
    // Add the custom CSS styles
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      :root {
        --momenceColorBackground: #FBFBFB;
        --momenceColorPrimary: 7, 123, 244;
        --momenceColorBlack: 3, 1, 13;
      }
    `;
    document.head.appendChild(styleTag);

    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '13752');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[]');
    script.setAttribute('tag_ids', '[183772]');
    script.setAttribute('show_additional_teachers', 'true');
    script.setAttribute('hide_tags', 'true');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="ribbon-schedule"></div>;
};

export default ScheduleWidget;
