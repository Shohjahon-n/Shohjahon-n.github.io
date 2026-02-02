export const ThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html:
        "(function(){try{var stored=localStorage.getItem('theme');var system=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var theme=stored||system;document.documentElement.dataset.theme=theme;var parts=location.pathname.split('/').filter(Boolean);var locale=parts[0];if(['uz','en','ru'].indexOf(locale)<0&&parts.length>1){locale=parts[1];}if(['uz','en','ru'].indexOf(locale)>=0){document.documentElement.lang=locale;}}catch(e){}})();"
    }}
  />
);
